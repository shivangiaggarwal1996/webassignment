import express,{Router} from 'express'
import Sequelize from 'sequelize'
import * as subjectDao from '../dao/subjectDao'
import * as teacherDao from '../dao/teacherDao'

const route:Router=express.Router()


route.post('/:name',(req,res)=>
{
    subjectDao.addSubject(req.params.name,parseInt(req.body.id))
    .then((subject)=>
    {
        res.send(subject)
    })
    .catch((err)=>
    {
        console.log("cannot add subject")
    })
})


route.get('/',(req,res)=>
{
   
  subjectDao.getSubjects().then((subjects:any)=>
    {
        
        res.send(subjects)
    }).catch((err)=>
{
    console.log("cannot get subjects")
})
})

route.get('/:id',(req,res)=>
{
   
  subjectDao.getSubjectsOfId(parseInt(req.params.id)).then((subject:any)=>
    {
        
        res.send(subject)
    }).catch((err)=>
{
   res.send("cannot get subject of Id"+req.params.id)
})
})


route.get('/:id/courseId',(req,res)=>
{
   
  subjectDao.getSubjectOfCourse(parseInt(req.params.id)).then((subject:any)=>
    {
        
        res.send(subject)
    }).catch((err)=>
{
   res.send("cannot get subject of Id"+req.params.id)
})
})

route.get('/:id/teachers',(req,res)=>
{
 teacherDao.getTeacherWithSubjectId(parseInt(req.params.id))
 .then((teacher:any)=>
{
    res.send(teacher)
})
.catch((err)=>
{
    res.send("unable to get teacher with id"+req.params.id)
})
 
})




export default route
