
# require modules
gulp   = require 'gulp'
clean  = require 'gulp-clean'
coffee = require 'gulp-coffee'

# Clean
gulp.task 'clean', ->
  gulp.src 'lib'
    .pipe clean()

# CoffeeScript
gulp.task 'coffee', ->
  gulp.src 'src/**/*.coffee'
    .pipe coffee()
    .pipe gulp.dest 'lib'

# Build
gulp.task 'default', ['clean'], ->
  gulp.start 'coffee'
