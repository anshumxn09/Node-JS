const fs = require('fs');

var data = "";

const readerStream = fs.createReadStream('anshu.txt');

readerStream.setEncoding('utf-8');

readerStream.on('data', (chunk) => {
    data += chunk;
})

readerStream.on('end', () => {
    console.log(data);
})

readerStream.on('error', (err) => {
    console.log(err);
})
