import { Component, OnInit } from '@angular/core';
import {StudentsService } from './students.service'
import {BatchService} from '../batch/batch.service'
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentList:object[]
  student:Object
  batchList:Object[]
  batchId:Number
  check:boolean
  
  constructor(private studentApi:StudentsService,private batchApi:BatchService) { 
    this.studentList=[]
    this.batchList=[]
    this.check=false
    this.student={
      name:"SEARCH"
    }
  }

  ngOnInit() {
    this.studentApi.getStudentData().subscribe((event:any)=>
    {
      this.studentList=event
      console.log(event)
   })

   this.batchApi.getBatchData().subscribe((event:any)=>
  {
    this.batchList=event
  })
  }

  getStudentById(id:string)
  {
    this.check=true
    this.studentApi.getStudentById(parseInt(id)).subscribe((event:any)=>
    {
      this.student=event
    })
  }

  addStudentToBAtch(studentId:string,batchId:string)
  {
    console.log("index is "+batchId)
    console.log("student id is "+studentId+"batchId is "+this.batchId)
    this.batchApi.addToBatch(parseInt(studentId),this.batchId).subscribe((event:any)=>
  {
    this.check=false
  })
  }
  addStudent(name:string)
  {
    console.log("name is"+name)
    this.studentApi.addStudentData(name).subscribe((event:any)=>
  {
    let obj=
    {
      name:name
    }
    this.studentList.push(obj)
    console.log(event)
  })
  }
  
}
