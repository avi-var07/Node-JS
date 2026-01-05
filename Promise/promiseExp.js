let myPromise = new Promise((resolve, reject)=>{
    let isDone = true;

    if(isDone)resolve("Hogya Bhaiiii");
    else reject("Nhi hua yrrr.....")
});

myPromise
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log("Kya hua tera vaada???"+error);
    })
    .finally(()=>{
        console.log("Vaada hai bhai!")  //ye humesha chalega veereee
    })
