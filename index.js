const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hola mundo')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
        })
