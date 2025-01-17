import express from 'express';
import mongoose from 'mongoose';
import {PORT, mongoDBURL} from "./config.js" 
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())


app.use("/books",booksRoute)
app.get("/",(req, res)=>{
    console.log(req)
    res.status(234).send("Welcome to MErn Stack")
})

mongoose.connect(mongoDBURL).then(()=>{
    console.log("App is connected to database")
    app.listen(PORT,()=>{
        console.log(`App is listening to port : ${PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})