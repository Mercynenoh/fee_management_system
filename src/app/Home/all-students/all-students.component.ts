import { Component, OnInit,Input } from '@angular/core';
import { Student } from 'src/app/Interfaces/StudentInterface';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  @Input() student!:Student[]
  filter=''
  constructor( private studentService:StudentService) { }

  ngOnInit(): void {
    this.student=this.studentService.getStudents()
  }
  onAdd(student:Student){
    this.student.push(student)
    }

}
