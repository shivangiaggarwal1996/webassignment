import { Component, OnInit } from '@angular/core';
import {TeachersService} from './teachers.service'
import { SubjectsService} from '../subjects/subjects.service'
import {teacher} from './teacherConfig'
import {subject} from '../subjects/subjectconfig'
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teacherList:teacher[]
  subjectId:Number
  subjectList:subject[]
 
  constructor(private teacherApi:TeachersService,private subjectApi:SubjectsService) {
    this.teacherList=[]
    this.subjectList=[]
   
   }

  ngOnInit() {
    this.teacherApi.getTeacherData().subscribe((event:any)=>
    {
      this.teacherList=event
      console.log(event)
   })
   this.subjectApi.getSubjectData().subscribe((event:any)=>
  {
    this.subjectList=event
  })
  }
 
  addTeacher(name:string)
  {
    
    let obj:teacher=
    {
      name:name,
      subjectId:this.subjectId
    }
    console.log("subject is "+name+"course Id is "+this.subjectId)
    this.teacherApi.addTeacher(name,this.subjectId).subscribe((event:any)=>
  {
    this.teacherList.push(obj)
    
    console.log("successful")
  })
  }
}
