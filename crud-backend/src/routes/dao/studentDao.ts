import Sequelize from 'sequelize'
import {Student} from '../../db'
import {Batch} from '../../db'
import { MappingStudentBatch} from '../../db'
import {Course} from '../../db'
async function getStudents()
{
    try
    {
        return await Student.findAll()
    }
    catch(err)
    {
        console.log("Unable to find students")
    }
}

async function addStudent(name:string)
{
    try{
        Student.create({
            name:name
        })
    }
    catch(err)
    {
        console.log("unable to add student")
    }
}

async function addStudentToBatch(studentId:Number,batchId:Number)
{
    try{
       return await MappingStudentBatch.create(
            {
                studentId:studentId,
                batchId:batchId
            }
        )
    }
    catch(err)
    {
        console.log("unable to add student to batch")
    }
}

async function getStudentWithId(id:Number)
{
    
    try{
       return await Student.findOne({
           where:
           {
               id:id
           }
        })
    }
    catch(err)
    {
        console.log("unable to get student id"+id)
    }

}

async function getStudentWithBatches(id:Number)
{
    return await Batch.findAll(
        {
            include: [{
                model:Student,
                through: {
                    attributes: ['studentId', 'batchId']
                },
                where:{
                    id:id
                }
              }]
    
        }
    )
}

async function getStudentWithBatchId(courseId:Number,batchId:Number)
{
    console.log("I am here")
    return await Student.findAll(
        {
            include: [{
                model:Batch,
                through: {
                    attributes: ['studentId', 'batchId']
                }
              ,where:
              {
                  id:batchId,
                  courseId:courseId
              } }]
                
        })
}



export{
    addStudent,
    getStudents,
    addStudentToBatch,
    getStudentWithId,
    getStudentWithBatches,
    getStudentWithBatchId
}