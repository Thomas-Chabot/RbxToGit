var fs = require ("fs");

const ERR_FILE_EXISTS = 'EEXIST';

class File {
  static saveTxt (filePath, fileContents) {
    return new Promise ((fulfill, reject) => {
      fs.writeFile (filePath, fileContents, (err) => {
        if (err) reject (err);
        else fulfill ();
      });
    });
  }

  static createDirectory (directoryPath) {
    return new Promise ((fulfill, reject) => {
      fs.mkdir (directoryPath, (err) => {
        if (!err || err.code == ERR_FILE_EXISTS) fulfill ();
        else reject ();
      });
    });
  }
}

module.exports.File = File;
