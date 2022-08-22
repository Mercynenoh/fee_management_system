import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Student } from 'src/app/Interfaces/StudentInterface';
import { StudentService } from 'src/app/Services/student.service';
import { FilterPipe } from 'src/app/Pipe/filter.pipe';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() student!:Student[]
  filter=''
  constructor( private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {

  }
    onBalance(){
      this.router.navigate(['dashboard/balance'])
    }
    onnoBalance(){
      this.router.navigate(['dashboard/nobalance'])
    }
    onAll(){
      this.router.navigate(['dashboard'])
    }
    onAdd(){
      this.router.navigate(['dashboard/addstudent'])
    }

}
