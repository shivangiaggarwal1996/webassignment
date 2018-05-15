import express from 'express'
import path from 'path'
import api from './routes/api'
const app=express()

app.use(express.json())


app.use(express.urlencoded(
    {
        extended:true
    }
))    
app.use('/api',api)
app.use('/',express.static(path.join(__dirname,'myapp')))
 
app.listen(8084,()=>
{
    console.log("server has been started")
})

