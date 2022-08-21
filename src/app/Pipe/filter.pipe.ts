import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../Interfaces/StudentInterface';

@Pipe({
  name: 'searchfilter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Student[], name:string): Student[] {
    if(value.length===0 || name===''){
      name = name.toLowerCase();
      return value
    }
    const student:Student[]=[]
    for (let car of value){
   if (car.name.toLowerCase().indexOf(name)!=-1){
    student.push(car)
   }
  }
  return student
}

}
