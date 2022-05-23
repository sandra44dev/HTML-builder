const fs = require('fs');
const path = require('path');

const originalStylesDir = path.join(__dirname, 'styles');
const bundle = path.join(__dirname, 'project-dist', 'bundle.css');

/* create write stream without append flag to clear the file */
const clearBundle = fs.createWriteStream(bundle);
clearBundle.write('');

const output = fs.createWriteStream(bundle, { 'flags': 'a' });

fs.readdir(originalStylesDir, (err, files) => {

  if (err)
    console.log(err);

  else {

    files.forEach(function (file) {

      let filePath = path.join(originalStylesDir, file);

      if (path.extname(filePath) === '.css') {
        let input = fs.createReadStream(filePath);
        input.on('data', data => {
          output.write(data);
        });
      }

    });
  }
});