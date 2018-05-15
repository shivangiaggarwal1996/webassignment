import Sequelize from 'sequelize'
import {Teacher, Batch} from '../../db'
import {Subject} from '../../db'
import {Course} from '../../db'

async function addTeacher(name:string,subjectId:Number)
{
    try{
        return await Teacher.create({
            name:name,
           subjectId:subjectId
        })

    }
    catch(err)
    {
        console.log("unable to add Teacher")
    }
}

async function getTeachers()
{
    try{
        return await Teacher.findAll()
    }
    catch(err)
    {
        console.log("unable to get teacher ")
    }
}

async function getTeacherWithSubjectId(id:Number)
{
    try{
        return await Teacher.findAll(
            {
                where:
                {
                    subjectId:id
                }
            }
        )
    }
    catch(err)
    {
        console.log("unable to get teacher with subject id"+id)
    }
}

async function getTeacherWithId(id:Number)
{
    try{
        return await Teacher.findOne({
            where:
            {
               id:id
            }
        })
    }
    catch(err)
    {
        console.log("unable to get teacher with id"+id)
    }
}

async function getTeacherWithBatches(id:Number)
{
    try{
        return await Teacher.findAll({
            include: [
                {
                    model:Subject,
                    include: [
                        {
                            model:Course,
                            include: [
                                {
                                    model:Batch,
                                }
                              ], 
                            
                        }
                      ], 
                }
              ], 
              where:
              {
                  id:id
              } 
        })

    }
    catch(err)
    {
        console.log("unable to get teacher with batches")
    }
}

async function getTeachersBelongingToBatchId(courseId:Number,batchId:Number)
{
    try{
        return await Teacher.findAll({
            include: [
                {
                    model:Subject,
                    where:
                    {
                        courseId:courseId
                    },
                    
                    include: [
                        {
                            model:Course,
                            where:
                            {
                                id:courseId
                            },
                            include: [
                                {
                                    model:Batch,
                                    where:
                                    {
                                        id:batchId,
                                        courseId:courseId
                                       
                                    }
                                }
                              ], 
                            
                        }
                      ], 
                }
              ]
        })

    }
    catch(err)
    {
        console.log("unable to get teacher with batches")
    }
}



export{
    addTeacher,
    getTeachers,
    getTeacherWithSubjectId,
    getTeacherWithId,
    getTeacherWithBatches,
    getTeachersBelongingToBatchId
}