import express,{Router} from 'express'
import Sequelize from 'sequelize'
import * as courseDao from '../dao/courseDao'
import * as batchDao from '../dao/batchDao'
import * as lectureDao from '../dao/lectureDao'
import * as studentDao from '../dao/studentDao'
import * as teacherDao from '../dao/teacherDao'

const route:Router=express.Router()


route.post('/',(req,res)=>
{
    courseDao.addCourse(req.body.name)
    .then((course)=>
{
    res.send(course)
})
.catch((err)=>
{
    console.log("cannot add course")
})
})


route.get('/',(req,res)=>
{
   
   courseDao.getAllCourses().then((courses:any)=>
    {
        console.log("size is ")
        res.send(courses)
    }).catch((err)=>
{
    console.log("cannot get courses")
})
})



route.get('/:id',(req,res)=>
{
   let courseId:Number=parseInt(req.params.id)
   courseDao.getCourseWithId(courseId).then((course:any)=>
   {
       res.send(course)
        
   }).catch((err)=>
   {
     console.log(err)
   })
})

route.get('/:id/batches',(req,res)=>
{
    let courseId:Number=parseInt(req.params.id)
    batchDao.getBatchesWithCourseId(courseId)
    .then((batches:any)=>
    {
        console.log("batches are"+batches.length)
        res.send(batches)   
    })
    .catch((err)=>
    {
        console.log(err)
    })

})

route.get('/:courseId/batches/:batchId',(req,res)=>
{
    let idCourse=req.params.courseId
    let idBatch=req.params.batchId
    batchDao.getBatchWithCourseIdAndBatchId(idCourse,idBatch)
    .then((batch:any)=>
    {
        res.send(batch)
    })
    .catch((err)=>
    {
        console.log(err)
    })

})

route.get('/:courseId/batches/:batchId/lectures',(req,res)=>
{
    let idCourse:Number=parseInt(req.params.courseId)
    let idBatch:Number=parseInt(req.params.batchId)
    lectureDao.getLectureOfCourseAndBatch(idCourse,idBatch)
    .then((lectures)=>
    {
       res.send(lectures) 
    })
    .catch((err)=>
    {
        console.log(err)
    })
})

route.get('/:courseId/batches/:batchId/lectures/:lectureId',(req,res)=>
{
    let idCourse:Number=parseInt(req.params.courseId)
    let idBatch:Number=parseInt(req.params.batchId)
    let idLecure:Number=parseInt(req.params.lectureId)
    lectureDao.getLectureWithIdofCourseAndBatch(idCourse,idBatch,idLecure)
    .then((lecture)=>
    {
        res.send(lecture)
    })
    .catch((err)=>
    {
        console.log("unable to get lecture with id"+idLecure)
    })

})

route.get('/:courseId/batches/:batchId/students',(req,res)=>
{
    studentDao.getStudentWithBatchId(parseInt(req.params.courseId),parseInt(req.params.batchId))
    .then((student)=>
    {
        console.log("student"+student.length)
        res.send(student)
    })
    .catch((err)=>
    {
        res.send("Cannot get student of particular Batch")
    })
    
})

route.get('/:courseId/batches/:batchId/teachers',(req,res)=>
{
    teacherDao.getTeachersBelongingToBatchId(parseInt(req.params.courseId),parseInt(req.params.batchId))
    .then((teacher)=>
    {   
        res.send(teacher)   
    })
    .catch((err)=>
{

})

})

export default route

