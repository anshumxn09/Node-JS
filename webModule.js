const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html' , "utf-8", (err, data) => {
        res.writeHead(200, {
            'Content-Type' : "text/html",
        })
        res.write(data.toString());
        res.end();
    })
}).listen(5000, () => {
    console.log('done');
})
