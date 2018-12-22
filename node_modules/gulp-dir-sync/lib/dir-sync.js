(function() {
  var RED, RESET, chokidar, compareMtime, fs, gutil, path, traceError;

  chokidar = require('chokidar');

  fs = require('fs-extra');

  path = require('path');

  gutil = require('gulp-util');

  RED = '\u001b[31m';

  RESET = '\u001b[0m';

  traceError = function() {
    var args;
    args = Array.prototype.slice.apply(arguments);
    if (typeof args[0] === 'string') {
      args[0] = RED + args[0];
    } else {
      args.unshift(RED);
    }
    if (typeof args[args.length - 1] === 'string') {
      args[args.length - 1] = args[args.length - 1] + RESET;
    } else {
      args.push(RESET);
    }
    return console.error.apply(console, args);
  };

  compareMtime = function(src, target) {
    var isNewer;
    isNewer = true;
    if (fs.existsSync(target)) {
      isNewer = fs.statSync(src).mtime > fs.statSync(target).mtime;
    }
    return isNewer;
  };

  module.exports = function(fromDir, toDir, opts) {
    var filter, watcher;
    if (opts == null) {
      opts = {};
    }
    filter = opts.filter;
    this._keepalive = setInterval((function() {}), 500);
    watcher = chokidar.watch(fromDir, {
      persistent: true
    });
    return watcher.on('all', function(event, srcFile) {
      var destFile;
      if (filter && !srcFile.match(filter)) {
        return;
      }
      if (path.basename(srcFile) === '.DS_Store') {
        return;
      }
      if (fromDir === srcFile) {
        return;
      }
      destFile = path.join(toDir, path.relative(fromDir, srcFile));
      if (event === 'addDir') {
        if (!fs.existsSync(destFile)) {
          gutil.log(gutil.colors.green("mkdir: " + destFile));
          fs.mkdirSync(destFile);
        }
      }
      if (event === 'add') {
        if (!fs.existsSync(destFile)) {
          gutil.log(gutil.colors.green("add: " + srcFile + " > " + destFile));
          fs.copySync(srcFile, destFile);
        }
      }
      if (event === 'change') {
        if (compareMtime(srcFile, destFile)) {
          gutil.log(gutil.colors.green("change: " + srcFile + " > " + destFile));
          fs.copySync(srcFile, destFile);
        }
      }
      if (event === 'unlink') {
        if (fs.existsSync(destFile)) {
          gutil.log(gutil.colors.green("delete: " + destFile));
          fs.removeSync(destFile);
        }
      }
      if (event === 'unlinkDir') {
        if (fs.existsSync(destFile)) {
          gutil.log(gutil.colors.green("rmdir: " + destFile));
          return fs.removeSync(destFile, {
            'force': true
          });
        }
      }
    });
  };

}).call(this);
