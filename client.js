const net = require('net');

const client = net.connect({port: 5000}, () => {
    console.log('connectedd to server');
    client.write('Anshuman Sharma');
});

client.on('data', (data) => {
    console.log(data.toString());
});

client.on('end', () => {
    console.log('disconnected from the server');
})