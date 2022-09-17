const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', () => {
    console.log('connected succesfully!!!!!');
    eventEmitter.emit('data_received');
});

eventEmitter.on('data_received',function(){
    console.log('Anshuman Sharma is practicing the code of events!!!');
});

eventEmitter.emit('connection');
console.log('program ended');