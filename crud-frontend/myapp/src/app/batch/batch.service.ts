import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BatchService {
  BASE_URL1="http://localhost:8084/api/students/addbatch";
  BASE_URL2="http://localhost:8084/api/batches"
  BASE_URL3="http://localhost:8084/api/courses"
  constructor(private http:HttpClient) { }

  getBatchData()
  {
    return this.http.get(this.BASE_URL2);
  }

  getBatchDataOfCourse(courseId:Number)
  {
    return this.http.get(this.BASE_URL3+'/'+courseId+'/batches');
  }

  addToBatch(studentId:Number,batchId:Number)
  {
    console.log("student id is "+studentId+"batchId is "+batchId+"i am here ng build")
    return this.http.post(this.BASE_URL1
      ,{
      studentId:studentId,
      batchId:batchId
    });
  }

  addBatch(name:string,courseId)
  {
   
    return this.http.post(this.BASE_URL2
      ,{
        name:name,
        id:courseId
    });
  }
  
}
