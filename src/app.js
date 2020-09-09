const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

const publicDirectorhyPath = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('views', viewsPath)
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectorhyPath))



app.get('', (req,res)=>{
    res.render('index',{
        title:'Weather',
        name:"Hassnain"
    })

})


app.get('/about', (req,res)=>{
    res.render('about',{
        title:'about',
        name:"Hassnain"
    })

})

app.get('/help', (req,res)=>{
    res.render('help',{
        title:'Help',
        name:"Hassnain"
    })

})


app.get("/weather",(req,res)=>{
    console.log(req.query)
    if(!req.query.address){
      return  res.send({
           error:'Address Required'
       })
    }
    geocode(req.query.address,(error,{latitude,longtitude}={})=>{
        if (error) {
          return res.send({error})
        }
        
        forecast( latitude, longtitude, (error, forecastdata) => {
          if (error) {
            return res.send({error})
            
          }
          res.send({
            forecast:forecastdata,
            location:longtitude
        })
          })
          
        
          
    })
    
})


app.get('/help/*', (req,res)=>{
    res.render('error',{
        title:'404',
        desc:'Article not found',
        name:"Hassnain",
    })
})

app.get('*', (req,res)=>{
    res.render('error',{
        title:'404',
        desc:'page not found',
        name:"Hassnain",
    })

})

app.listen(3000,()=>{
    console.log("Server started")

})