const fs = require('fs');
const path = require('path');

const originalFolderPath = path.join(__dirname, 'files');
const copiedFolder = path.join(__dirname, 'files-copy');

function copyDir() {
  /* create files-copy folder */
  fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });

  fs.readdir(originalFolderPath, (err, files) => {

    if (err)
      console.log(err);

    else {

      files.forEach(function (file) {
        let originalFilePath = path.join(originalFolderPath, file);
        let copiedFile = path.join(copiedFolder, file);

        function callback(err) {
          if (err) throw err;
        }

        fs.copyFile(originalFilePath, copiedFile, callback);

      });
    }
  });
}
copyDir();