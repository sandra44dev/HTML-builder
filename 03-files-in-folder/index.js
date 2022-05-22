const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

function getInfo() {

  fs.readdir(folderPath, (err, files) => {

    if (err)
      console.log(err);

    else {

      files.forEach(function (file) {
        let filePath = path.join(folderPath, file);

        fs.stat(filePath, (err, data) => {
          if (err) {
            console.log(err);
          }
          if (data.isFile()) {
            console.log(file.slice(0, file.indexOf('.')) + ' - ' + path.extname(filePath).slice(1) + ' - ' + data.size + ' bytes');
          }

        });
      });
    }
  });
}
getInfo();