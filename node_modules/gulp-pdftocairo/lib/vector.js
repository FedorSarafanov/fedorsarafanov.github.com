'use strict'

var through = require('through2')
  , spawn = require('child_process').spawn
  , path = require('path')
  , gutil = require('gulp-util')

module.exports = convertVector

function convertVector( outputStream, infile, outfile, formatFlag, options, cb ) {

  var outBuffer = new Buffer('')
  var errBuffer = new Buffer('')

  gutil.log("pdftocairo: converting to '" + gutil.colors.cyan(path.relative(outfile.base, outfile.path)) + "'")
  var pdftocairo = spawn(options.command,[ formatFlag, '-', '-' ])

  if( infile.isBuffer() ) {
    pdftocairo.stdout.on('end',function() {
      outfile.contents = outBuffer
    })
  }

  pdftocairo.stderr.on('data',function(chunk) {
    errBuffer = Buffer.concat([errBuffer,chunk])
  })

  if( infile.isBuffer() ) {
    pdftocairo.stdin.write(infile.contents)
    pdftocairo.stdin.end()

    pdftocairo.stdout.on('data',function(chunk) {
      outBuffer = Buffer.concat([outBuffer,chunk])
    })
  } else {
    infile.contents.pipe(pdftocairo.stdin)
    outfile.contents = pdftocairo.stdout
  }

  pdftocairo.on('exit',function(code,signal) {
    if( code !== 0 ) outputStream.emit('error',errBuffer)
    outputStream.push( outfile )
    if( outfile.isStream() ) outfile.contents.end()
    cb()
  })

  return pdftocairo
}
