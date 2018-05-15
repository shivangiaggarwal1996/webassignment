
import express,{Router} from 'express'
import courseRoute from './course'
import batchRoute from './batch'
import subjectRoute from './subject'
import lectureRoute from './lecture'
import studentRoute from './student'
import teacherRoute from './teacher'


const route:Router= express.Router()

route.use('/courses',courseRoute)
route.use('/batches', batchRoute)
route.use('/subjects', subjectRoute)
route.use('/lectures',lectureRoute)
route.use('/students',studentRoute)
route.use('/teachers',teacherRoute)

export=route