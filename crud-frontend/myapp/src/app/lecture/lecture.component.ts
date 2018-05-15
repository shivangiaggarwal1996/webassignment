import { Component, OnInit } from '@angular/core';
import {LecturesService} from './lectures.service'
import {lecture} from './lectureconfig'
import {ActivatedRoute} from '@angular/router';
import {SubjectsService} from '../subjects/subjects.service'
import {subject} from '../subjects/subjectconfig'
@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  lectureList:lecture[]
  batchId:Number
  courseId:Number
  subjectList:subject[]
  subjectId:Number
  constructor(private lectureApi:LecturesService,route: ActivatedRoute,private subjectApi:SubjectsService) {
    this.lectureList=[]
    this.batchId=route.snapshot.params['id']
    this.courseId=route.snapshot.params['courseId']
    this.subjectList=[]
   }

  ngOnInit() {
    this.lectureApi.getLectureData(this.batchId,this.courseId).subscribe((event:any)=>
  {
    this.lectureList=event
  })
  this.subjectApi.getSubjectOfCourse(this.courseId).subscribe((event:any)=>
  {
    this.subjectList=event
  })
  }

  addLecture(name:string)
  {
    let obj:lecture={
      name:name,
      batchId:this.batchId,
      subjectId:this.subjectId
    }
    this.lectureApi.addLecture(name,this.batchId,this.courseId).subscribe((event:any)=>
  {
    this.lectureList.push(obj)
  })
  }
}
