const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hey Anshuman Sharma this side!!!!', "UTF8");

writeStream.end();

writeStream.on('finish', () => {
    console.log('okay i have finished the task');
})

writeStream.on('error', (error) => {
    console.log(error);
})
