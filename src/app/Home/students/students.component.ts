import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Student } from 'src/app/Interfaces/StudentInterface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Output() addCar= new EventEmitter<Student>()
  filter=''
  name=''
  gender=''
  class=''
  balance=0
  onAdd(){
    if (this.name===''||this.gender===''||this.class===''){
      alert('Empty Fields!!!')
    }
else{
    this.addCar.emit({
      name:this.name,
      gender:this.gender,
      class:this.class,
      balance:this.balance
    })
  }
    this.name=''
     this.gender=''
     this.class=''
     this.balance=0

  }


  constructor() { }

  ngOnInit(): void {
  }

}
