
import Sequelize from 'sequelize'

const db=new Sequelize('evaluation1','ngrusr','ngrpass',{
    dialect:'mysql',
    
    host:'localhost',
   
})

const Course=db.define('course',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:
    {
        type:Sequelize.STRING,
        allowNull:false
    }
})
const Batch=db.define('batch',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:
    {
        type: Sequelize.STRING,
        allowNull:false
    } 

})

const Teacher=db.define('teacher',{
  
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:
    {
        type: Sequelize.STRING,
        allowNull:false
    } 
})

const Student=db.define('student',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
   name:
    {
        type: Sequelize.STRING,
        allowNull:false
    },
  
})

const Lecture=db.define('lecture',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
   name:
    {
        type: Sequelize.STRING,
        allowNull:false
    },
  
})
const MappingStudentBatch=db.define('mappings',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
})

const Subject=db.define('subject',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
   name:
    {
        type: Sequelize.STRING,
        allowNull:false
    },
  
})




Course.hasMany(Batch)
Subject.belongsTo(Course)
Teacher.belongsTo(Subject)
Lecture.belongsTo(Batch)
Lecture.belongsTo(Subject)
Student.belongsToMany(Batch,{through:'mappings'})
Batch.belongsToMany(Student,{through:'mappings'})

db.sync().then(()=>
{
    console.log("database created")
}).catch((err)=>
{
    console.log(err)
})

export  {
   Course,Subject,Teacher,Lecture,Batch,Student, MappingStudentBatch
}


