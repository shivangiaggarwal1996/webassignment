import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

      BASE_URL="http://localhost:8084/api/students";
      BASE_URL2="http://localhost:8084/api/courses";
      constructor(private http:HttpClient) { }

      getStudentData()
      {
        return this.http.get(this.BASE_URL);
      }

      getStudentById(id:Number)
      {
        return this.http.get(this.BASE_URL+'/'+id)
      }

      getParticularStudents(batchId:Number,courseId:Number)
      {
        return this.http.get(this.BASE_URL2+'/'+courseId+'/batches/'+batchId+'/students')
      }

      addStudentData(name:string)
      {
        console.log("name is "+name)
        return this.http.post(this.BASE_URL,{
          name:name
        });
      }

}
