const { response } = require('express')
const express =require('express')
const request =require('request')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
//middlewares
app.set("view engine","ejs")
app.use('/public',express.static('public'))
//routing
app.get("/", (req, res)=>{
    
           
    const url="http://www.omdbapi.com/?apikey=ea18075e&s=avengers"
    request(url,function(error,reponse,body){
        if(!error && response.statusCode===200){
            const data=JSON.parse(body)
            //res.send(data)
            res.render('home',{moviedump1:data})
        }else{
            res.send('somthing went wrong')
        }
    })
       
    
})
app.get("/aboutme", (req, res)=>{
    res.render("Aboutme")
})
app.get('/result',(req,res)=>{
    const url=`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${req.query.movieName}`
    request(url,function(error,reponse,body){
        if(!error && response.statusCode===200){
            const data=JSON.parse(body)
            //res.send(data)
            res.render('results',{moviedump:data})
        }else{
            res.send('somthing went wrong')
        }
    })
    //res.send('home page ')
   // res.render("results")//displays html file
})
app.get("/result/:id", (req, res)=>{
    //console.log(req.query.movieName)
    console.log(process.env.API_KEY)
    const url= `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${req.params.id}`
    request(url, function (error, response, body){
        if(!error && response.statusCode==200){
            const data= JSON.parse(body)
            //console.log(data)
            //res.send(data)
            res.render("details", {movieData: data})
        }else{
            res.send("Uh oh error")
        }
    })
})

app.get('/home',(req,res)=>{

            
    const url=`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=avengers`
    request(url,function(error,reponse,body){
        if(!error && response.statusCode===200){
            const data=JSON.parse(body)
            //res.send(data)
            res.render('home',{moviedump1:data})
        }else{
            res.send('somthing went wrong')
        }
    })
})
app.get("*", (req, res)=>{
    res.send("Go back! Illegal response")
})
app.listen(3000,()=>{
    console.log("server has strated")
})
