import { Component, OnInit,Input } from '@angular/core';
import { Student } from 'src/app/Interfaces/StudentInterface';
import { StudentService } from 'src/app/Services/student.service';
import { NobalancePipe } from 'src/app/Pipe/nobalance.pipe';

@Component({
  selector: 'app-no-balance',
  templateUrl: './no-balance.component.html',
  styleUrls: ['./no-balance.component.css']
})
export class NoBalanceComponent implements OnInit {
  @Input() student!:Student[]
  filter=''
  nobalance=''
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.student= this.studentService.getStudents().filter(v=> v.balance===0)
  }

}
