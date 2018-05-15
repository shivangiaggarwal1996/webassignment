import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentsService } from './students/students.service';

import { TeachersComponent } from './teachers/teachers.component';
import { CoursesComponent } from './courses/courses.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { FormsModule } from '@angular/forms';
import { BatchComponent } from './batch/batch.component';
import { LectureComponent } from './lecture/lecture.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  { path:'', component: WelcomeComponent },
  { path:'students', component: StudentsComponent },
  { path:'teachers', component: TeachersComponent},
  { path:'courses', component:  CoursesComponent},
  { path:'subjects', component: SubjectsComponent },

  { path:'batches/:id', component:BatchComponent },
  { path:'lectures/:id/:courseId', component:LectureComponent }
];







@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
   
    TeachersComponent,
    CoursesComponent,
    SubjectsComponent,
    BatchComponent,
    LectureComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
