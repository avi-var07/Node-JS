const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('Alakh Pandey', ()=>{
    console.log("Hello Bachooooooooooooooooooooooooooooooooooo");
});

eventEmitter.emit('Alakh Pandey');

eventEmitter.on('Alakh Pandey', (name)=>{
    console.log(`Mera Naam ${name}`);
});
eventEmitter.emit('Alakh Pandey', 'Jhin Jhin Chuuu');

//parameterised call krenge to default bhi call hoga kyuki  eventEmitter.on('Alakh Pandey', ()=>{ ... });
// eventEmitter.on('Alakh Pandey', (name)=>{ ... });
// to dono listeners 'Alakh Pandey' event ke saath register ho jaate hain.
// EventEmitter ye nahi dekhta ki pehla parameterized hai ya nahi — bas ye dekhta hai:

// “ye dono callbacks ‘Alakh Pandey’ event ke saath jude hue hain.”

// Ab jab tu emit karta hai:
// eventEmitter.emit('Alakh Pandey', 'Alakh Pandey');


// To EventEmitter internally karta kya hai:

// us event ke naam ('Alakh Pandey') ke saare listeners uthata hai (jitne bhi .on() se register hue the),

// aur sabko ek ek karke call karta hai,

// aur agar tu koi argument pass karta hai ('Alakh Pandey'), to wo sabhi listeners ko milta hai, chahe unke parameters ho ya na ho.

//Important: 

// EventEmitter me “function overloading” jaisa concept nahi hota
// (jaise Java me hota hai ki same naam ke alag-alag functions alag parameters ke hisaab se call ho jaayein).

// EventEmitter me to bas ek list hoti hai ki:

// is event ke liye ye ye functions call karne hain.

// To jab tu emit() karta hai — sab listeners call ho jaate hain, chahe unka signature alag ho ya nahi.