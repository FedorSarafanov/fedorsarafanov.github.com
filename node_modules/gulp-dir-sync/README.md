# gulp-dir-sync

Synchronizing directories plugin for Gulp.

## USAGE

### Install

```
$ npm install gulp-dir-sync --save-dev
```

### Example

#### dirSync(srcDir, destDir)

```javascript
var gulp = require('gulp');
var dirSync = require('gulp-dir-sync');

// Basic usage
gulp.task('sync', function() {
  dirSync('src/static', 'dist');
});
```

## License
Copyright (c) 2014 Yusuke Narita
Licensed under the MIT license.
