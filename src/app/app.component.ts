import { Component, Injectable, OnInit } from '@angular/core';
import { Student } from './Interfaces/StudentInterface';
import { StudentService } from './Services/student.service';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fee_management';
  student:Student[]=[]
 constructor( private StudentService:StudentService){}

  ngOnInit(): void {
     this.student= this.StudentService.getStudents()
  }

}
