
chokidar = require 'chokidar'

fs    = require 'fs-extra'
path  = require 'path'
gutil = require 'gulp-util'

# エラー
RED   = '\u001b[31m'
RESET = '\u001b[0m'
traceError = ->
  args = Array::slice.apply arguments
  if typeof args[0] is 'string'
    args[0] = RED + args[0]
  else
    args.unshift RED

  if typeof args[args.length - 1] is 'string'
    args[args.length - 1] = args[args.length - 1] + RESET
  else
    args.push RESET
  console.error.apply console, args

compareMtime = (src, target)->
  isNewer = true
  if fs.existsSync(target)
    isNewer = fs.statSync(src).mtime > fs.statSync(target).mtime
  return isNewer

# 
module.exports = (fromDir, toDir, opts = {})->

  { filter } = opts

  @_keepalive = setInterval (-> ), 500

  watcher = chokidar.watch fromDir, { persistent:true }
  watcher.on 'all', (event, srcFile)->

    return if filter && !srcFile.match(filter)
    return if path.basename(srcFile) is '.DS_Store'
    return if fromDir is srcFile

    destFile = path.join(toDir, path.relative fromDir, srcFile)

    if event is 'addDir'
      unless fs.existsSync destFile
        gutil.log gutil.colors.green "mkdir: #{destFile}"
        fs.mkdirSync destFile
    if event is 'add'
      unless fs.existsSync destFile
        gutil.log gutil.colors.green "add: #{srcFile} > #{destFile}"
        fs.copySync srcFile, destFile
    if event is 'change'
      if compareMtime srcFile, destFile
        gutil.log gutil.colors.green "change: #{srcFile} > #{destFile}"
        fs.copySync srcFile, destFile
    if event is 'unlink'
      if fs.existsSync destFile
        gutil.log gutil.colors.green "delete: #{destFile}"
        fs.removeSync destFile
    if event is 'unlinkDir'
      if fs.existsSync destFile
        gutil.log gutil.colors.green "rmdir: #{destFile}"
        fs.removeSync destFile, 'force': true
