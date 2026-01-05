const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('hello', ()=>{
    console.log("Hello Event Triggered");
});

eventEmitter.emit('hello');

eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});
eventEmitter.emit('greet', 'Aviral');

const showMessage = () => console.log('Event ho gaya');

eventEmitter.on('remove', showMessage);
eventEmitter.emit('remove');

eventEmitter.removeListener('remove', showMessage);
eventEmitter.emit('remove');

//Single listener:-

eventEmitter.on('data', ()=>console.log("Data recieved."));
eventEmitter.on('data', ()=>console.log("Data processed."));
eventEmitter.on('data', ()=>console.log("Data saved."));

eventEmitter.emit('data');


eventEmitter.once('start', ()=>{
    console.log('This event runs only once!');
});

eventEmitter.emit('start');
eventEmitter.emit('start');
eventEmitter.emit('start');
eventEmitter.emit('start');