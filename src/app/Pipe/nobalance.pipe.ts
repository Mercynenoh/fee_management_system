import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../Interfaces/StudentInterface';
import { StudentService } from '../Services/student.service';

@Pipe({
  name: 'cleared'
})
export class NobalancePipe implements PipeTransform {
  constructor( private studentsService:StudentService){

  }
  transform(value:Student[], balance:string): Student[] {
    const student:Student[]=[]
    for (let students of value){
   if (this.studentsService.getStudents().filter(v=> v.balance==0)){
    student.push(students)
   }
  }
  return student
}

}
