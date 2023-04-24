const express = require('express')
const router = express.Router()

//middleware

const openCloseServices = (req, res, next) => {

    const date = new Date()
    const toDay = date.getDay()
    const hour = date.getHours()
    
    if(toDay-1 < 4){
        if(hour >= 9 && hour <= 17){
            next()
        }
    }
    res.status(200).render('ser_not_avail.ejs', { title : 'Close'})
}

router.use(openCloseServices)

//routes

router.get('/', (req, res) => {
    res.status(200).render('index.ejs', { title : 'welcome to RyanFT' })
})

router.get('/service', (req, res) => {
    res.status(200).render('services.ejs', { title : 'take advantage of our services ' })
})

router.get('/contact', (req, res) => {
    res.status(200).render('contact.ejs', { title : 'join us' })
})

router.use((req, res) => {
    res.status(404).render('errorPage.ejs', { title : 'Error'})
})

module.exports = router