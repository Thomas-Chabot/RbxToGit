var Extract = require ("./Extract.js").Extract;
var Path    = require ("./Path.js").Path;

class Script {
  static save (script) {
    return new Promise ((fulfill, reject) => {
      var filepath  = Extract.path (script);
      var filename  = Extract.filename (script);
      var extension = Extract.extension (script);
      var contents  = Extract.contents (script);

      if (!filepath || !filename || !extension || !contents)
        reject (new Error ("Data not formatted correctly"));
      else
        this._doSave (filepath, filename, extension, contents).then (fulfill, reject);
    });
  }

  static _doSave (path, name, extension, contents) {
    return new Promise ((fulfill, reject) => {
      Path.createDirectories (path.split (".")).then (() => {
        Path.saveFile (path, name, extension, contents).then (fulfill, reject);
      }, reject);
    });
  }
}

module.exports.Script = Script;
