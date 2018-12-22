#!/usr/bin/env node

var fs = require('fs')
  , split = require('split2')

var isGarbageInput = false

process.stdin.pipe(split()).on('data', function(line) {
  if( line.match(/^Nonsense$/) ) {
    isGarbageInput = true

    process.stderr.write('May not be a PDF file')
    process.stderr.write('\0')

    process.exit(1)
  }
}).on('end',function() {

  var outFileName
  var dashCount = process.argv.filter(function(x) {
    return x==='-'
  }).length

  var output = ''

  if( process.argv.indexOf('-svg') !== -1 ) {
    extension = '.svg'
    output='<svg'
  } else if( process.argv.indexOf('-jpg') !== -1 ) {
    extension = '.jpg'
    output = 'JFIF'
  } else if( process.argv.indexOf('-jpeg') !== -1 ) {
    extension = '.jpg'
    output = 'JFIF'
  } else if( process.argv.indexOf('-ps') !== -1 ) {
    extension = '.ps'
    output='%!PS-Adobe-'
  } else if( process.argv.indexOf('-eps') !== -1 ) {
    extension = '.eps'
    output='%!PS-Adobe-.. EPSF-'
  } else if( process.argv.indexOf('-png') !== -1 ) {
    extension = '.png'
    output = '.PNG'
  }

  if( dashCount < 2 ) {
    // Assume the output filename directly follows the input ('-')
    outFileName = process.argv[ process.argv.indexOf('-') + 1] + extension
  }

  if( outFileName ) {
    fs.writeFileSync(outFileName,output)
  } else {
    process.stdout.write(new Buffer(output))
    process.stdout.write('\0')
  }

})
