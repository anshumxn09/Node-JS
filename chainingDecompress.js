const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('output.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('chaining.txt'));

