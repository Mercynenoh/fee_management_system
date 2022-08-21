import {Pipe, PipeTransform} from '@angular/core';
import { Student } from '../Interfaces/StudentInterface';
@Pipe({
    name: 'welcome'
})
export class WelcomePipe implements PipeTransform {
  transform(value:Student[], name:string): Student[] {
    const student:Student[]=[]
    for (let student of value){

  }
  return student
}
}
