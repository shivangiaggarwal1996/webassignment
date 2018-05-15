import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LecturesService {

  BASE_URL="http://localhost:8084/api/courses";
  BASE_URL1="http://localhost:8084/api/lectures"

constructor(private http:HttpClient) { }

  getLectureData(batchId:Number,courseId:Number)
  {
    return this.http.get(this.BASE_URL+'/'+courseId+'/batches/'+batchId+'/lectures');
  }

  addLecture(name:string,batchId:Number,subjectId:Number)
  {
  
    return this.http.post(this.BASE_URL1,{
      name:name,
      batchId:batchId,
      subjectId:subjectId
    });
  }
}
