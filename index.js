const express=require('express');
const {sendMail}=require('./controller/sendmail')
const app=express();
app.get('/',(req,res)=>{
    res.send('I am Server');
})

app.get('/sendmail',sendMail);

const start=async()=>{
    try{
    app.listen(5000,()=>{
     console.log("SERVER IS RUNNING")
    })
    }
    catch(error){
console.log(error)
    }
}
start()