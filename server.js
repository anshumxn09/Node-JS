const net = require('net');

const server = net.createServer((socket) => {
    socket.end('Goodbye\n');
});

server.listen(5000, () => {
    console.log("Server is listening!!!!!!!!!!");
});
