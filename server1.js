var express = require('express')
var bodyParser = require('body-parser')

const app= express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('helloe just ing sfherer and you got all these all the way')
})

app.post('/items',(req,res)=>{
    let size= draw(req.body.x,req.body.y);
    // res.writeHead(400,'text/html')
    res.send(`this is what your name updated ${req.body.name}, and this is the email you input ${req.body.email}, the size of this ${size} `)
})

const draw =(dx,dy)=>{
    let size=  dx*dy;
    return size
}


app.listen(3000)