const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/',(req,res)=>{
    res.render('index')
})
app.set('views','./views')
app.set('view engine','ejs')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
        })
