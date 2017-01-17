module.exports.outputFormatFlags = {
  'svg': '-svg',
  'png': '-png',
  'ps': '-ps',
  'eps': '-eps',
  'jpeg': '-jpeg',
  'jpg': '-jpeg'
}

module.exports.outputExtensions = {
  'svg': '.svg',
  'png': '.png',
  'ps': '.ps',
  'eps': '.eps',
  'jpeg': '.jpg',
  'jpg': '.jpg'
}

module.exports.isRaster = function( format ) {
  switch(format) {
    case 'png':
    case 'jpeg':
    case 'jpg':
      return true
      break;
    default:
      return false
  }
}

