const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home Page</h1>');

})

app.get('/about',(req,res)=>{
    res.status(200).json({message:'Ritik About Page'});
})
app.use((req,res)=>{
    res.status(404).send('404 Not Found');
});

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});