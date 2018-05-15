import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  BASE_URL="http://localhost:8084/api/subjects";

constructor(private http:HttpClient) { }

  getSubjectData()
  {
    return this.http.get(this.BASE_URL);
  }

  addSubject(name:string,courseId:Number)
  {
    console.log("subject is "+name+"course Id is "+courseId+"i am in service")
    return this.http.post(this.BASE_URL+'/'+name,{
      id:courseId
    });
  }
 
  getSubjectOfCourse(id:Number)
  {
    return this.http.get(this.BASE_URL+"/"+id+'/courseId');
  }
}
