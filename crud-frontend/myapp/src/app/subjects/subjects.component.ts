import { Component, OnInit } from '@angular/core';
import { SubjectsService } from './subjects.service'
import {subject} from './subjectconfig'
import {course} from '../courses/courseconfig'
import {CoursesService} from '../courses/courses.service'

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjectList:subject[]
  courseId:Number
  
  courseList:course[]
  constructor(private subjectApi:SubjectsService, private courseServiceApi:CoursesService) {
     this.subjectList=[]
   
   }

  ngOnInit() {
    this.subjectApi.getSubjectData().subscribe((event:any)=>
    {
      this.subjectList=event
      console.log(event)
   })
   this.courseServiceApi.getCourseData().subscribe((event:any)=>
  {
    this.courseList=event
    console.log(this.courseList)
  })
  }

 
  addSubject(name:string)
  {
   let obj:subject={
     name:name,
     courseId:this.courseId
   }
    console.log("subject is "+name+"course Id is "+this.courseId)
    this.subjectApi.addSubject(name,this.courseId).subscribe((event:any)=>
  {
    this.subjectList.push(obj)
    console.log("successful")
  })
  }


}
