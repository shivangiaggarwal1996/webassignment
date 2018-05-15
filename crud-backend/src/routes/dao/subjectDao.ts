import Sequelize from 'sequelize'
import {Subject} from '../../db'


async function addSubject(name:string,courseId:Number)
{
    try{
        return await Subject.create({
            name:name,
            courseId:courseId
        })

    }
    catch(err)
    {
        console.log("unable to add subject")
    }
}

async function getSubjects()
{
    try{
        return await Subject.findAll()
    }
    catch(err)
    {
        console.log("unable to get subjects ")
    }
}

async function getSubjectsOfId(id:Number)
{
    try{
        return await Subject.findOne({
            where:
                {
                    id:id
                }
        })
    }
    catch(err)
    {
        console.log("unable to get subject with Id ")
    }
}


async function getSubjectOfCourse(id:Number)
{
    try{
        return await Subject.findAll({
            where:
                {
                   courseId:id
                }
        })
    }
    catch(err)
    {
        console.log("unable to get subject with Id ")
    }
}




export{
    addSubject,
    getSubjects,
    getSubjectsOfId,
    getSubjectOfCourse
}