import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Student } from 'src/app/Interfaces/StudentInterface';
import { StudentService } from 'src/app/Services/student.service';
import { FilterPipe } from 'src/app/Pipe/filter.pipe';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // public FilterPipe: any = '';
  @Input() student!:Student[]
  filter=''
  constructor( private studentService:StudentService) { }

  ngOnInit(): void {
    this.student=this.studentService.getStudents()
  }
  onAdd(student:Student){
    this.student.push(student)
    }

    onBalance(){
      this.student= this.studentService.getStudents().filter(v=> v.balance>0)
      console.log('clicked');
    }
    onnoBalance(){
      this.student= this.studentService.getStudents().filter(v=> v.balance===0)
      console.log('clicked');
    }
    onAll(){
      this.student= this.studentService.getStudents().filter(v=> v.balance>=0)
      console.log('clicked');
    }

}
