const fs = require('fs');
const zlib = require('zlib');

const readerStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt.gz');

// compressing the file into .gz extensions
readerStream.pipe(zlib.createGzip()).pipe(writeStream);
console.log('finished the assigned task');

