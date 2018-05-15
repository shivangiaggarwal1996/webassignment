import express,{Router} from 'express'
import Sequelize from 'sequelize'
import * as batchDao from '../dao/batchDao'

const route:Router=express.Router()


route.post('/',(req,res)=>
{
    batchDao.addBatch(req.body.name,req.body.id)
    .then((batch)=>
{
    res.send(batch)
})
.catch((err)=>
{
    console.log("cannot add batch")
})
})


route.get('/',(req,res)=>
{
   
   batchDao.getBatches().then((batches:any)=>
    {
        console.log("size is ")
        res.send(batches)
    }).catch((err)=>
{
    console.log("cannot get batches")
})
})



export default route

