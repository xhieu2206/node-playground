const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`Data received with ${name} and ${id}`);
});

customEmitter.emit('response', 'Ross', 31);
