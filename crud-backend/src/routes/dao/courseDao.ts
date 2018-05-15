
import Sequelize from 'sequelize'
import {Course} from '../../db'


async function addCourse(name:string)
{
    try{
        Course.create(
            {
                name:name
            }
        )
    }
    catch(err)
    {
        console.log(err)
    }
}


async function getAllCourses()
{
    try{
        console.log("All courses")
        return await Course.findAll()
       
    }
    catch(err)
    {
        console.log(err)
    }
}

async function getCourseWithId(id:Number)
{
    try{
        console.log("All courses")
        return await Course.findAll(
            {
                where:
                {
                   id:{
                        [Sequelize.Op.eq]:id
                    }
                }
            }
        )
       
    }
    catch(err)
    {
        console.log(err)
    }
}

async function getCourseWithBatch(id:Number)
{
    try{
        console.log("All courses")
        return await Course.findAll(
            {
                where:
                {
                   id:{
                        [Sequelize.Op.eq]:id
                    }
                }
            }
        )
       
    }
    catch(err)
    {
        console.log(err)
    }
}




export
{
    getAllCourses, getCourseWithId ,addCourse
} 
 
