'use strict'

var gulp = require('gulp')
  , pdftocairo = require('../lib')

function toFormat(format) {
  return gulp.src('*.pdf', {buffer: true})
    .pipe( pdftocairo({format: format, resolution: 800}) )
    .pipe( gulp.dest('./') )
}

['png', 'svg', 'eps', 'ps', 'jpg'].forEach(function(format) {
  gulp.task('to-'+format, function() {
    return toFormat(format)
  })
})
