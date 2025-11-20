import express from "express"

const app=express()

app.use(express.json())

const port=5000
 app.listen(port,()=>{
    console.log(`server running on port ${port}`)
 })