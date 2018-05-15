import Sequelize from 'sequelize'
import {Lecture} from '../../db'
import {Batch} from '../../db'
import {Course} from '../../db'

async function addLecture(name:string , batchId:Number , subjectId:Number)
{
    try{
        Lecture.create({
            name:name,
            batchId:batchId,
            subjectId:subjectId
        })
    }
    catch(err)
    {
        console.log("unable to add lecture")
    }
}

async function getLectures()
{
    try{
        return await Lecture.findAll()

    }
    catch(err)
    {
        console.log("Unable to get lectures")
    }
}

async function getLectureOfCourseAndBatch(courseId:Number,batchId:Number)
{
try {
       
    return await Lecture.findAll({
      include: [
          {
              model:Batch,
              where:{
                  courseId:courseId
              }
              
          }
        ],
        where:
        {
            [Sequelize.Op.and]:
            {
                batchId:batchId
               
               
            }
        }
     })
  }  catch (err) {
      console.error(err)
  }
}

async function getLectureWithIdofCourseAndBatch(courseId:Number,batchId:Number,lectureId:Number)
{
    try{
        return await Lecture.findAll({
            include: [
                {
                    model:Batch,
                    where:{
                        courseId:courseId
                    }
                    
                }
              ],
              where:
              {
                  [Sequelize.Op.and]:
                  {
                      id:lectureId,
                      batchId:batchId
                     
                     
                  }
              }
        })
    }
    catch(err)
    {
        console.log("unable to find lecture of lecture id"+lectureId)
    }

}

export{
    getLectureOfCourseAndBatch,addLecture,getLectures,getLectureWithIdofCourseAndBatch
}