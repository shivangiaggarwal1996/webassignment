import { Component, OnInit } from '@angular/core';
import {BatchService} from './batch.service'
import {batch} from './batchtsconfig'
import {ActivatedRoute} from '@angular/router';
import {StudentsService} from '../students/students.service'

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  batchList:batch[]
  
  courseId:Number
  studentList:Object[]
  
  
  constructor(private batchApi:BatchService,route: ActivatedRoute,private studentApi:StudentsService) {
    this.batchList=[]
   
    this.courseId=route.snapshot.params['id']
    this.studentList=[]
   
    
   }

  ngOnInit() {
    this.batchApi.getBatchDataOfCourse(this.courseId).subscribe((event:any)=>
    {
      this.batchList=event
      console.log(event)
   })
  
  }

  
  addBatch(name:string)
  {
    let obj :batch={
      name:name,
      courseId:this.courseId
    }
   
    this.batchApi.addBatch(name,this.courseId).subscribe((event:any)=>
    {
      this.batchList.push(obj)
     
    })
  }

  getStudents(batchId)
  {
    console.log("batch id is "+batchId)
      this.studentApi.getParticularStudents(parseInt(batchId),this.courseId).subscribe((event:any)=>
    {
      this.studentList=event
    })
  }
}
