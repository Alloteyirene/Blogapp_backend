const http=require("http")
const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
const routes=require("./route/auth.js")
require("dotenv").config();


const config={
    useNewURLParser: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.MONGODB_URI,{})
.then (() => {
    console.log('Successfully connected to Mongodb')
})
.catch(err=>{
    console.error("Some problem occured",err)
})

app.use(routes)

app.listen(process.env.PORT,()=>{
    console.log("Express app  is working")
})
const port=process.env.PORT
// const server=http.createServer(app)
// server.listen(port,()=>{
//     console.log("server is listening")
// })