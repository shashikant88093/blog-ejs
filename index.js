const express = require('express')
const bodyParser = require('body-parser')
const _ = require("lodash")

const app = express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
const PORT = 8000
const homepage = "Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह 1960 के दशक में Letraset Lorem Ipsum अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में Aldus PageMaker Lorem Ipsum के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ."
let ObjectDatas = [{
    title: "Home",
    postDescription:homepage
}]

app.get('/',(req, res)=>{
    res.render("home",{
        listData:ObjectDatas
    })
})

app.get('/about',(req,res)=>{
    const aboutPage = "Vestibulum consequat ex ut ligula pharetra malesuada. Cras congue, ipsum non ultrices rutrum, ligula risus pharetra odio, eu volutpat urna ligula sed ipsum. Donec vitae pharetra tortor. Maecenas sollicitudin enim tortor. Pellentesque faucibus massa elit, eget imperdiet sem maximus nec. Integer maximus condimentum nibh, at auctor elit tempus in. Integer eleifend nunc eget leo accumsan, non dignissim est luctus. Duis facilisis volutpat neque eu iaculis. Quisque vestibulum metus eu velit vehicula ultricies consectetur nec tortor. Nunc fringilla vitae magna id semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis massa id nisl efficitur, sed tempor tellus volutpat. Cras dignissim, dui vitae sagittis sodales, leo libero efficitur purus, ac commodo nisl lectus ut tellus. Sed facilisis, enim non molestie semper, mi nunc lobortis enim, vel porttitor risus ipsum in odio. Fusce in dapibus tortor. Curabitur eget turpis vitae nibh blandit volutpat."
    res.render("about",{
        aboutPage:aboutPage
    })
})

app.get('/contact',(req,res)=>{
    const contactPage = "Fusce commodo purus et sagittis dignissim. Fusce tempor quis dolor nec facilisis. Pellentesque accumsan enim a augue dictum, a accumsan turpis elementum. Nullam dignissim sed neque nec interdum. Phasellus sed lorem rhoncus, efficitur est vitae, venenatis tortor. Phasellus sit amet rhoncus dolor, ut pulvinar nibh. Integer sollicitudin consequat odio, vel venenatis enim aliquet mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec maximus dapibus leo, quis vestibulum mi tristique sit amet. Sed luctus massa eu magna faucibus maximus."
    res.render("contact",{
        contactPage:contactPage
    })
})
app.get('/compose',(req,res)=>{
    res.render("compose")
})
app.post('/compose',(req,res)=>{
    let ObjectData={
        title: req.body.postTitle,
        postDescription:req.body.postDescription
    }
  ObjectDatas.push(ObjectData)
 console.log(ObjectDatas)
 res.redirect("/")
})
app.get("/posts/:postId",(req,res)=>{
    console.log(req.params.postId,"#$%^&")
    ObjectDatas?.forEach((data,index)=>{
        const sortedTitle =  _.lowerCase(data?.title)
        if(sortedTitle == _.lowerCase(req.params.postId)){
           res.render('posts',{postData:data})

        }
})
})
app.listen(PORT,(req, res)=>{
    console.log(`App is running on port ${PORT}`)
})