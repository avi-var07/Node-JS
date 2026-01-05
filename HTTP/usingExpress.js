const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.status(200).send('Hello Bachooooooo');
});
app.get('/about',(req,res)=>{
    res.status(200).send('This is the About Page');
});
app.use((req,res)=>{
    res.status(404).send('404 Not Found');
});
app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/');
}
);