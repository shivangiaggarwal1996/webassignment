import Sequelize from 'sequelize'
import {Batch} from '../../db'
import {Course} from '../../db'


async function addBatch(name:string,id:Number)
{
    try{
    return await Batch.create({
            name:name,
            courseId:id
        })
    }
    catch(err)
    {
        console.log("Unable to add course in database")
    }
}

async function getBatches()
{
    try{
        return await Batch.findAll()
    }
    catch(err)
    {
        console.log("Cannot get batches")
    }
}

async function getBatchesWithCourseId(courseId:Number)
{
    try{
        
        return await Batch.findAll(
            {
                where:
                {
                   courseId:courseId
                    
                }
            }
        )
    }
    catch(err)
    {
        console.log(err)
    }
}

async function getBatchWithCourseIdAndBatchId(courseId:Number,batchId:Number)
{
    try{
     
        return await Batch.findAll(
            {
                where:
                {
                    [Sequelize.Op.and]:
                    {
                        id:batchId,
                        courseId:courseId,
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
export{
    addBatch,
    getBatches,
    getBatchesWithCourseId,
    getBatchWithCourseIdAndBatchId

}