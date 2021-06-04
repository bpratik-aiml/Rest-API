const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
require ('dotenv/config')
const postsRoute = require('./routes/posts')
app.use(bodyParser.json())
app.use(cors())
app.use('/posts', postsRoute)

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true ,useUnifiedTopology: true },
    ()=>console.log("Successfully connected to the database")
)
app.listen(8080, (req, res)=>{
    console.log("server is listening to the port 8080")
})

//write this in your external framework or browser or you can try it on codepen.io

// fetch('http://localhost:8080/posts')
// .then(result=>{   return (result.json())})
// .then(
// data=>{
//   console.log(data)
// })