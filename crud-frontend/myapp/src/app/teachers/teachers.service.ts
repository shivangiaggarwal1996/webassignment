import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  BASE_URL="http://localhost:8084/api/teachers";

constructor(private http:HttpClient) { }

    getTeacherData()
    {
      return this.http.get(this.BASE_URL);
    }

    addTeacher(name:string,subjectId:Number)
    {
      console.log("subject is "+name+"course Id is "+subjectId+"i am in service")
      return this.http.post(this.BASE_URL+'/'+name,{
        id:subjectId
      });
    }
}
