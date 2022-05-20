/* include fs and path modules */
const fs = require('fs');
const path = require('path');

/* set correct path */
const filePath = path.join(__dirname, 'text.txt');

/* create stream to read the file, utf-8 - to read the data correctly */
const readableStream = fs.createReadStream(filePath, 'utf-8');

/* when read data - white it on console */
readableStream.on('data', chunk => console.log(chunk));
