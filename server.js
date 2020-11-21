const express = require('express')
const mongoose = require('mongoose')
const app = express()

const shortUrl = require('./Models/shortUrl')

mongoose.connect('mongodb://localhost/urlshortner', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}) 

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.get('/', (req, res) =>{
    res.render('index')
})

app.post('/shortUrls', async (req, res) =>{
    await shortUrl.create({ full: req.body.fullUrl})
    res.redirect('/')

})
app.listen(process.env.PORT || 1500) 