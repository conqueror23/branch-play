var express = require('express')
// var bodyParse = require('body-parser')

const app= express();

// app.use(bodyParse)

app.get('/',(req,res)=>{
    res.send('helloe')
})

app.listen(3000)