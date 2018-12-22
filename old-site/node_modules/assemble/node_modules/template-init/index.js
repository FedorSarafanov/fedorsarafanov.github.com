/*!
 * template-init <https://github.com/assemble/template-init>
 *
 * Copyright (c) 2014 Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */

var loader = require('base-file-loader');
var extend = require('extend-shallow');
var tutils = require('template-utils');
var through = require('through2');
var gutil = require('gulp-util');
var path = require('path');

/**
 * Template init plugin used to add templates from a source to the template cache.
 *
 * ```js
 * var app = require('assemble');
 * var initPlugin = require('template-init');
 * ```
 *
 * @name  initPlugin
 * @api public
 */

module.exports = function initPlugin (app, config) {
  config = extend({prefix: '__task__', name: 'task name'});

  return function init (options) {
    var session = app.session;
    var opts = extend({}, app.options, options);
    var taskName = session.get(config.name);
    var templateType = 'page';

    // create a custom template type based on the task name to keep
    // source templates separate from files added via `.src()`
    if (taskName) {
      templateType = config.prefix + taskName;
      session.set('template type', templateType);
      app.create(templateType, { isRenderable: true }, [loader]);
    }

    var plural = app.collection[templateType];

    var stream = through.obj(function (file, enc, cb) {
      if (file.isStream()) {
        var err = new gutil.PluginError('template-init', 'Streaming is not supported.');
        this.emit('error', err);
        return cb();
      }

      // Convert vinyl file to templates and add to cache
      app[templateType](tutils.toTemplate(file), opts);
      cb();
    }, function (cb) {
      // push all the templates on the current templateType cache into the stream
      // this lets other plugins do processing on the templates before rendering.
      tutils.pushToStream(app.views[plural], this);
      cb();
    });

    // bind the stream to the session context to ensure
    // context is available inside the stream.
    app.session.bindEmitter(stream);
    return stream;
  };
};
