import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
 

    BASE_URL="http://localhost:8084/api/courses";
  
  constructor(private http:HttpClient) { }
  
  getCourseData()
  {
    return this.http.get(this.BASE_URL);
  }


  addCourse(name:string)
  {
    return this.http.post(this.BASE_URL,{
      name:name
    })
  }
}
