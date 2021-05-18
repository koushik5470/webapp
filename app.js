const express =require('express')
const app=express()
//middlewares
app.set("view engine","ejs")

//routing
app.get('/result',(req,res)=>{
    //res.send('home page ')
    res.render("results")//displays html file
})
app.get('/',(req,res)=>{
    //res.send('home page ')
    res.render("home")//displays html file
})
app.get('/hi/:id',(req,res)=>{
    console.log(req.params)
    res.send(`home page hi ${req.params.id}`)
})

app.listen(3000,()=>{
    console.log("server has strated")
})
