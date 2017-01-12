'use strict'

var assert = require('chai').assert
  , pdftocairo = require('../lib')
  , vinylFile = require('vinyl-file')
  , rawBody = require('raw-body')
  , streamifier = require('streamifier')


//var PDFTOCAIRO='pdftocairo'
var PDFTOCAIRO=__dirname+'/stubs/pdftocairo.js'

function streamConvertAndCollect( input, converter, cb) {
  input.contents = streamifier.createReadStream(input.contents)

  converter.write(input)
  converter.end()

  function checkComplete() {
    if( files.length === complete) cb.apply(undefined,arguments)
  }

  var complete = 0
  var files = []

  converter.on('data',function(file) {
    files.push(file)
    rawBody(file.contents,function(err,buf) {
      file.bufferedContents = buf
      complete++
      checkComplete(null,files)
    })
  }).on('end',function() {

  }).on('error',function(err) {
    cb(err.toString(),null)
  })
}

function bufferConvertAndCollect(input, converter, cb) {
  converter.write(input)
  converter.end()

  var files = []
  converter.on('data',function(d) {
    files.push(d)
  }).on('end',function() {
    cb(null, files)
  }).on('error',function(err) {
    cb(err,null)
  })
}

function looksLikeSVG( buffer ) {
  return buffer.toString().match(/^<svg/m)
}

function looksLikeEPS( buffer ) {
  return buffer.toString().match(/^%!PS-Adobe-.* EPSF-.*$/m)
}

function looksLikePS( buffer ) {
  return buffer.toString().match(/^%!PS-Adobe-.*/m)
}

function looksLikePNG( buffer ) {
  return buffer.toString().match(/^.PNG/m)
}

function looksLikeJPG( buffer ) {
  return buffer.toString().match(/.{0,10}JFIF/m)
}

describe( "for gulp",function() {

  var nullStream

  beforeEach(function() {
    nullStream = vinylFile.readSync( 'test/fixtures/x-plus-y.pdf' )
    nullStream.contents = null
  })

  it("passes null through unaffected",function(done) {
    bufferConvertAndCollect( nullStream, pdftocairo({command: PDFTOCAIRO, format: 'svg'}), function(err,files) {
      assert.isNull( files[0].contents, 'null file contents remain null')
      done()
    })
  })
})

describe( "buffered pdftocairo -> vector", function() {

  var pdfStream, badPdfStream

  beforeEach(function() {
    pdfStream = vinylFile.readSync( 'test/fixtures/x-plus-y.pdf' )
    badPdfStream = vinylFile.readSync('test/fixtures/nonsense.pdf')
  })

  it("emits an error on bad input",function(done) {
    bufferConvertAndCollect( badPdfStream, pdftocairo({command: PDFTOCAIRO, format: 'svg'}), function(err,files) {
      assert.match(err,/May not be a PDF file/m, "Complains that it doesn't look like a PDF")
      done()
    })
  })

  it("converts a pdf to an svg",function(done) {
    bufferConvertAndCollect( pdfStream, pdftocairo({command: PDFTOCAIRO, format: 'svg'}), function(err,files) {
      assert.isNull(err,'No errors')
      assert.equal(files[0].extname, '.svg')
      assert( looksLikeSVG( files[0].contents ), 'Looks like an SVG document' )
      done()
    })
  })

  it("converts a pdf to an eps",function(done) {
    bufferConvertAndCollect( pdfStream, pdftocairo({command: PDFTOCAIRO, format: 'eps'}), function(err,files) {
      assert.isNull(err,'No errors')
      assert.equal(files[0].extname, '.eps')
      assert( looksLikeEPS( files[0].contents ), 'Looks like an EPS document' )
      done()
    })
  })

  it("converts a pdf to a ps",function(done) {
    bufferConvertAndCollect( pdfStream, pdftocairo({command: PDFTOCAIRO, format: 'ps'}), function(err,files) {
      assert.isNull(err,'No errors')
      assert.equal(files[0].extname, '.ps')
      assert( looksLikePS( files[0].contents ), 'Looks like a PS document' )
      done()
    })
  })
})



describe( "buffered pdftocairo -> raster", function() {

  var pdfStream, badPdfStream

  beforeEach(function() {
    pdfStream = vinylFile.readSync( 'test/fixtures/x-plus-y.pdf' )
    badPdfStream = vinylFile.readSync('test/fixtures/nonsense.pdf')
  })

  it("emits an error on bad input",function(done) {
    bufferConvertAndCollect( badPdfStream, pdftocairo({command: PDFTOCAIRO, format: 'png'}), function(err,files) {
      assert.match(err,/May not be a PDF file/m, "Complains that it doesn't look like a PDF")
      done()
    })
  })

  it("converts a pdf to a png",function(done) {
    bufferConvertAndCollect( pdfStream, pdftocairo({command: PDFTOCAIRO, format: 'png'}), function(err,files) {
      assert.isNull(err,'No errors')
      assert.equal(files[0].extname, '.png')
      assert( looksLikePNG( files[0].contents ), 'Looks like a PNG document' )
      done()
    })
  })

  it("converts a pdf to a jpg",function(done) {
    bufferConvertAndCollect( pdfStream, pdftocairo({command: PDFTOCAIRO, format: 'jpg'}), function(err,files) {
      assert.isNull(err,'No errors')
      assert.equal(files[0].extname, '.jpg')
      assert( looksLikeJPG( files[0].contents ), 'Looks like a JPEG document' )
      done()
    })
  })

})

describe( "streamed pdftocairo", function() {

  var pdfStream, badPdfStream

  beforeEach(function() {
    pdfStream = vinylFile.readSync( 'test/fixtures/x-plus-y.pdf' )
    badPdfStream = vinylFile.readSync('test/fixtures/nonsense.pdf')
  })

  it("emits an error on bad input",function(done) {
    streamConvertAndCollect( badPdfStream, pdftocairo({command: PDFTOCAIRO, format: 'svg'}), function(err,files) {
      if( !err ) return
      assert.match(err,/May not be a PDF file/m, "Complains that it doesn't look like a PDF")
      done()
    })
  })

  it("converts a pdf to an svg",function(done) {
    streamConvertAndCollect( pdfStream, pdftocairo({command: PDFTOCAIRO, format: 'svg'}), function(err,files) {
      assert.isNull(err,'No errors')
      assert.equal(files[0].extname, '.svg')
      assert( looksLikeSVG(files[0].bufferedContents), 'Looks like an SVG document' )
      done()
    })
  })

  it("converts a pdf to an eps",function(done) {
    streamConvertAndCollect( pdfStream, pdftocairo({command: PDFTOCAIRO, format: 'eps'}), function(err,files) {
      assert.isNull(err,'No errors')
      assert.equal(files[0].extname, '.eps')
      assert( looksLikeEPS(files[0].bufferedContents), 'Looks like an EPS document' )
      done()
    })
  })

  it("converts a pdf to an ps",function(done) {
    streamConvertAndCollect( pdfStream, pdftocairo({command: PDFTOCAIRO, format: 'ps'}), function(err,files) {
      assert.isNull(err,'No errors')
      assert.equal(files[0].extname, '.ps')
      assert( looksLikePS(files[0].bufferedContents), 'Looks like an PS document' )
      done()
    })
  })

  it("throws an error on streamed png converstion because pdftocairo has a bug and gulp recommends not buffering to pretend it streams.",function() {
    assert.throws(function() {
      streamConvertAndCollect( badPdfStream, pdftocairo({command: PDFTOCAIRO, format: 'png'}), function(err,files) {
        assert(false)
      })
    }, Error, /pdftocairo is buggy/m, "Throws an error")
  })

  it("throws an error on streamed jpg converstion because pdftocairo has a bug and gulp recommends not buffering to pretend it streams.",function() {
    assert.throws(function() {
      streamConvertAndCollect( badPdfStream, pdftocairo({command: PDFTOCAIRO, format: 'jpg'}), function(err,files) {
        assert(false)
      })
    }, Error, /pdftocairo is buggy/m, "Throws an error")
  })

})
