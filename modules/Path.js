var File = require ("./File.js").File;

class Path {
  static set root (path) { this._root = path; }

  static createDirectories (directories) {
    return this._saveDirectories (this._root, directories, 0);
  }

  static saveFile (paths, filename, extension, contents) {
    var relPath = paths.replace (/\./g, "/");
    var relName = relPath + "/" + filename + "." + extension;

    var fullName = this._root + "/" + relName;

    return File.saveTxt (fullName, contents);
  }

  static _saveDirectories (path, directories, curIndex) {
    return new Promise ((fulfill, reject) => {
      if (curIndex >= directories.length) fulfill ();
      else {
        var directory = directories [curIndex];
        var newPath   = path + "/" + directory;

        File.createDirectory (newPath).then (() => {
          this._saveDirectories (newPath, directories, curIndex + 1).then (fulfill, reject);
        }, reject);
      }
    });
  }
}

module.exports.Path = Path;
