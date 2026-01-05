function downloadFile(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hogyi download! ");
        }, 3000);
    });
}

downloadFile()
    .then((message) => console.log(message))
    .finally(()=> console.log("Promise finished"));