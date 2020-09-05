const express= require('express')

const models= require('./db/models')
const db=models.db

const app=express()


app.listen(8008,()=>{
    console.log('server started on http://localhost:8008')
})