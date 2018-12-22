# square-parameters [![Build Status](https://travis-ci.org/rreusser/square-parameters.svg)](https://travis-ci.org/rreusser/square-parameters) [![npm version](https://badge.fury.io/js/square-parameters.svg)](http://badge.fury.io/js/square-parameters) [![Dependency Status](https://david-dm.org/rreusser/square-parameters.svg)](https://david-dm.org/rreusser/square-parameters)

Embed frontmatter-like config at the beginning of a string


## Introduction

For my [gulp-markdown-equations](https://github.com/rreusser/gulp-markdown-equations) module, I need a very quick and easy way to embed config at the beginning of an inline string. It needs to be kinda like a query string, not as verbose or flexible as JSON, sorta like frontmatter... but not quite any of those. Specifically it needs to satisfy these criteria:

1. Requires no encoding
2. Requires minimal escaping
3. Is easy to separate from content
4. Is very concise
5. Takes like three seconds to comprehend everything
5. Is not easily confused with any well-known format so people don't make incorrect assumptions about which syntax it does/doesn't support and so I'm not on the hook for supporting a specific format.

And so we get square-parameters. Perhaps not worthy of its own module, but I felt weird to hard-code it into another. Let me know if you have a better idea.


## Examples

```javascript
var sp = require('square-parameters')

// Pretty straightforward:
sp("[foo=bar][baz=bop]sample string")
  // => { content: "sample string", params: {foo: "bar", baz: "bop"} }

// Whitespace is fine
sp("[a parameter=some value]sample string")
  // => { content: "sample string", params: {"a parameter": "some value"} }

// Leading whitespace not allowed:
sp(" [foo=bar]sample string")
  // => { content: " [foo=bar]sample string", params: {} }
```


## API

### `require('square-parameters')( string )`
Extracts config from a string and returns two parts: `content` and `params`. `content` is a string with the parameters chopped off, and `params` is an object containing key/value pairs.

**Returns**: Content and parameters, i.e. `{content: "...", params: {...}}`


## Credits

(c) 2015 Ricky Reusser. MIT License
