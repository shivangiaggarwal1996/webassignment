import express,{Router} from 'express'
import Sequelize from 'sequelize'
import * as lectureDao from '../dao/lectureDao'
const route:Router=express.Router()


route .get('/',(req,res)=>
{
    lectureDao.getLectures()
    .then((lectures)=>
    {
        res.send(lectures)
    })
    .catch((err)=>
    {
        console.log("Unable to get Lectures")
    })
    
})
route.post('/',(req,res)=>
{
    lectureDao.addLecture(req.body.name,req.body.batchId,req.body.subjectId)
    .then((lecture)=>
{
    res.send(lecture)
})
.catch((err)=>
{
    console.log("cannot add lecture")
})
})




export default route
