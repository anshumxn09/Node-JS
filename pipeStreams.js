const fs = require('fs');

const readerStream = fs.createReadStream('anshu.txt');
const writeStream = fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);

console.log('finished the assigned task');
