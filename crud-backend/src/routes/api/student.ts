import express,{Router} from 'express'
import Sequelize from 'sequelize'
import * as studentDao from '../dao/studentDao'

const route:Router=express.Router()


route.post('/',(req,res)=>
{

    studentDao.addStudent(req.body.name)
    .then((student)=>
    {   
        res.send(student)   
    })
    .catch((err)=>
    {
        console.log("cannot add student")
    })
})


route.get('/',(req,res)=>
{
   
   studentDao.getStudents().then((student:any)=>
    {
        
        res.send(student)
    }).catch((err)=>
    {
        console.log("cannot get student")
    })
})

route.post('/addbatch',(req,res)=>
{
    studentDao.addStudentToBatch(parseInt(req.body.studentId),parseInt(req.body.batchId))
    .then((student:any)=>
    {
       res.send(student) 
    })
    .catch((err)=>
    {
        res.send("unable to add student to batch")
    })
})
route.get('/:id',(req,res)=>
{
    studentDao.getStudentWithId(parseInt(req.params.id))
    .then((student:any)=>
    {
       res.send(student) 
    })
    .catch((err)=>
    {
        res.send("unable to add student to batch")
    })
})


route.get('/:id/batches',(req,res)=>
{
    studentDao.getStudentWithBatches(parseInt(req.params.id))
    .then((batches:any)=>
    {
       res.send(batches) 
    })
    .catch((err)=>
    {
        res.send("unable to get student  batch")
    })
})


export default route

