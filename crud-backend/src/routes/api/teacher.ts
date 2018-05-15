import express,{Router} from 'express'
import Sequelize from 'sequelize'
import * as teacherDao from '../dao/teacherDao'

const route:Router=express.Router()


route.post('/:name',(req,res)=>
{
    teacherDao.addTeacher(req.params.name,parseInt(req.body.id))
    .then((teacher)=>
    {
        res.send(teacher)
    })
    .catch((err)=>
    {
        res.send("cannot add teacher")
    })
})


route.get('/',(req,res)=>
{
   
  teacherDao.getTeachers().then((teacher:any)=>
    {
        
        res.send(teacher)
    }).catch((err)=>
    {
        console.log("cannot get teachers")
    })
})

route.get('/:id',(req,res)=>
{
    teacherDao.getTeacherWithId(parseInt(req.params.id))
    .then((teacher:any)=>
    {
        res.send(teacher)
    })
    .catch((err)=>
    {
      res.send("unable to get teacher with id"+req.params.id)  
    })
   
})
 
route.get('/:id/batches',(req,res)=>
{
    teacherDao.getTeacherWithBatches(parseInt(req.params.id))
    .then((batch:any)=>
    {
        res.send(batch)
    })
    .catch((err)=>
{
    res.send("unable to find taecher with batches")
})
})

export default route
