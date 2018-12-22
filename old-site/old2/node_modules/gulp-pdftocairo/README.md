# gulp-pdftocairo [![Build Status](https://travis-ci.org/rreusser/gulp-pdftocairo.svg)](https://travis-ci.org/rreusser/gulp-pdftocairo) [![npm version](https://badge.fury.io/js/gulp-pdftocairo.svg)](http://badge.fury.io/js/gulp-pdftocairo) [![Dependency Status](https://david-dm.org/rreusser/gulp-pdftocairo.svg)](https://david-dm.org/rreusser/gulp-pdftocairo)

A gulp-compatible wrapper for pdftocairo that converts PDF to PNG/JPEG/PS/EPS/SVG

## Introduction

A quick wrapper for pdftocairo so that I can convert pdf files to a few different formats. Supports file streams containing either streamed or buffered data ([except no streams for raster formats since pdftocairo is buggy :(](http://stackoverflow.com/questions/17231267/pdf-to-png-in-python-with-pdf2cairo)) and since gulp says [horrible things will happen if I buffer streamed files to cover up for this](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/guidelines.md).

This is my first gulp plugin. Feedback on the things done wrong is welcome.

## TODO
- Add more command line options or at least just let you pass arbitrary arguments

## Example

This can easily be used in a gulpfile to convert a pdf to various other formats. A simple gulpfile would be:

```javascript
var gulp = require('gulp')
  , pdftocairo = require('gulp-pdftocairo')

gulp.task('to-png', function() {
  return gulp.src('*.pdf')
    .pipe( pdftocairo({format: 'png', resolution: 800}) )
    .pipe( gulp.dest('./') )
})
```


## Install

To use this, you'll need `pdftocairo` installed, which can probably be installed with a package manager. Currently left as an exercise for the reader.

```sh
$ npm install gulp-pdtocairo
```


## API

### `require('gulp-pdftocairo')( options )`
Create a transform stream that operates on file objects.

Options:
  - `format`: Must be one of `svg`, `png`, `ps`, `eps`, `jpg`
  - `resolution`: For raster files, specifies the resolution of the output
  - `transparent`: For raster files supporting alpha (i.e. png), whether background is transparent or not
  - `command`: defaults to `pdftocairo`

**Returns**: a gulp-compatible transform stream


## Testing

Testing is performed using a mocha/chai and a pdftocairo test stub (`test/stubs/pdftocairo.js`) that does just enough to pass the tests as if it were pdftocairo. To test with the real thing, just change the `PDFTOCAIRO` variable in the `test/test.js`

## Credits

(c) 2015 Ricky Reusser. MIT License
