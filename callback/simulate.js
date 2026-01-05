const { sign } = require("crypto");

function signup(Jethiyaaaa){
    console.log("Thumbs Up = Sign Up! ");
    Jethiyaaaa();
}
function login(Jethiyaaaa){
    console.log("Kya Iraada Hai Login Karke jaanu? Dashboard pe mat jaana ");
    Jethiyaaaa();
}
function showDashboard(){
    console.log("Aagye na Dashboard pe!!! ");
    
}

signup(()=>login(showDashboard))