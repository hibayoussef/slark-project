const express = require('express')
const serverStatic = require('server-static')
const path = require('path')

const app = express()

app.use('/' , serverStatic(path.join(__dirname,'/dist')))

app.get(/.*/, function (req,res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})
const port =  8080 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))