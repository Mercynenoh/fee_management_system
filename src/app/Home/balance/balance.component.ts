import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/Interfaces/StudentInterface';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  @Input() student!:Student[]
  filter='' 
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.student= this.studentService.getStudents().filter(v=> v.balance>0)
  }

}
