const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils.js/geocode')
const forecast = require('./utils.js/forecast')


const app = express()


//Define Path for express config
const publicDirectory = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectory))


app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Thomas'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Thomas'
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title: 'Help',
        helpText: 'This is some helpful text',
        name: 'Thomas'
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address,(error, {lattitude, longitude, location}) => {
        if(error){
            return res.send({error})
        }
        forecast(lattitude, longitude, (error, forecastData)=> {
            if(error) {
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

    // res.send({
    //     forecast:'It is snowing',
    //     location: 'Philadelphia',
    //     address: req.query.address
    // })
})
app.get('/products', (req,res)=> {

    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        product: []
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Thomas Benjamin',
        errorMessage: 'Help Article not found'
    })
})


app.get('*', (req,res)=> {
    res.render('404', {
        title: '404',
        name: 'Thomas Benjamin',
        errorMessage: 'Page not found' })
})


app.listen(3013, ()=> {
    console.log('Server is up on port 3001')
})