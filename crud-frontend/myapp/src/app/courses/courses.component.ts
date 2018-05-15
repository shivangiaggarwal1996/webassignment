import { Component, OnInit } from '@angular/core';
import { CoursesService} from './courses.service'
import {course} from './courseconfig'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseList:course[]
  
  constructor(private courseApi:CoursesService) {
    this.courseList=[]
   
   }

  ngOnInit() {
    this.courseApi.getCourseData().subscribe((event:any)=>
    {
      this.courseList=event
      console.log(event)
   })
  }

  

  addCourse(name:string)
  {
    let obj :course={
      name:name
    }
   
    this.courseApi.addCourse(name).subscribe((event:any)=>
    {
      this.courseList.push(obj)
     
    })
  }
}

