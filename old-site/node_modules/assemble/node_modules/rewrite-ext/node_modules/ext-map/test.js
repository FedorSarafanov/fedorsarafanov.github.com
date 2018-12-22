/*!
 * ext-map <https://github.com/jonschlinkert/ext-map>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var ext = require('./');

describe('ext', function () {
  it('should equal', function () {
    assert.equal(ext['.md'], '.html');
    assert.equal(ext['.hbs'], '.html');
    assert.equal(ext['.slim'], '.html');
    assert.equal(ext['.swig'], '.html');
    assert.equal(ext['.tmpl'], '.html');
    assert.equal(ext['.html'], '.html');
    assert.equal(ext['.htm'], '.html');
    assert.equal(ext['.less'], '.css');
    assert.equal(ext['.styl'], '.css');
    assert.equal(ext['.sass'], '.css');
    assert.equal(ext['.scss'], '.css');
    assert.equal(ext['.css'], '.css');
    assert.equal(ext['.coffee'], '.js');
    assert.equal(ext['.ls'], '.js');
    assert.equal(ext['.ts'], '.js');
    assert.equal(ext['.js'], '.js');
  });
});

