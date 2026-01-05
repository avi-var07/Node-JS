const fs = require('fs');

fs.readFile('HeavyTestingChalRahiHaiBhai.txt', 'utf-8', function(err, data){
    if(err)console.log("Error hai bhai Error hai!!", err);
    else console.log('File k andar kya hai?? DIM DIM DIM:', data);
} );

console.log("O haaloooooooooo");