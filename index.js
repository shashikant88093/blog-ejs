const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
const PORT = 8000
const homepage = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
app.get('/',(req, res)=>{
    res.render("home",{homepage:homepage})
})

app.get('/about',(req,res)=>{
    const aboutPage = "ABout page for shashikant"
    res.render("about",{
        aboutPage:aboutPage
    })
})

app.get('/contact',(req,res)=>{
    const contactPage = "Contact page for shashikant"
    res.render("contact",{
        contactPage:contactPage
    })
})
app.get('/compose',(req,res)=>{
    res.render("compose")
})
app.post('/compose',(req,res)=>{
 console.log(req.body.post)
})
app.listen(PORT,(req, res)=>{
    console.log(`App is running on port ${PORT}`)
})