import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Interfaces/StudentInterface';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor( private router:Router, public StudentService:StudentService ) { }
  student:Student={
  name:'',
  gender:'',
  class:'',
  balance:0

  }
  filter=''
  empty=false
  onAdd(){
    if (this.student.name===''||this.student.gender===''||this.student.class===''){
      this.empty=true
      setTimeout(() => {
        this.empty=false
      }, 1000);
    }
else{
   this.StudentService.addStudent(this.student)
    this.router.navigate(['dashboard'])

  }

  }




  ngOnInit(): void {
  }

}
