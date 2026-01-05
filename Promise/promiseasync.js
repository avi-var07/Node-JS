function downloadFile(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hogyi download! ");
        }, 3000);
    });
}

async function startDownload(){
    console.log("Ruk jaa kr rha download.....");
    let result = await downloadFile();
    console.log(result);
    console.log("Hogyaaaa, promise finished");
}

startDownload();