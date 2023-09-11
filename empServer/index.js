//connect env file
require('dotenv').config()

// importing router

const router=require('./Routes/router')

const express=require('express')
const cors=require('cors')
// import db connection
require('./Databaseconnection/connections')

const server= express()


server.use(cors())
server.use(express.json())
server.use(router)

const port=4000 || process.env.port
server.listen(port,()=>{
    console.log(".....ems running in p number 4000...");
})