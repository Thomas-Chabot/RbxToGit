class Extract {
  static path (contents) {
    var absPath = this._fullPath (contents);
    return absPath;
  }
  static filename (contents) {
    return ".main";
  }
  static extension (contents) {
    var ext = contents.match (/\n([^\n]+)/);
    return ext && ext [1];
  }
  static contents (contents) {
    var extracted = contents.match (/\n[^\n]*\n(.*)/s);
    return extracted && extracted [1].replace (/\n/g, "\r\n");
  }

  static _fullPath (contents) {
    var path = contents.match (/[^\n]+/);
    return path [0];
  }
}

module.exports.Extract = Extract;
