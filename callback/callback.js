function greet(name, Aviral){
    console.log("Hello Bachooooooooooooooooooooo "+name);
    Aviral();   //callback function : jo function as an argument aaya hai use call laga do
}

function Jethalal(){
    console.log("Acha to hum chalte hai");
}

greet("Kya haal chaal", Jethalal);