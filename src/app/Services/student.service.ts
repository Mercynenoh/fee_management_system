import { Injectable } from '@angular/core';
import { Student } from '../Interfaces/StudentInterface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  getStudents(): Student[] {
    return [
      {
        name: 'Melinda Becker',
        gender: 'Female',
        class: '2 red',
        balance: 5000,
      },
      {
        name: 'Peter Drury',
        gender: 'Male',
        class: '3 Green',
        balance: 10000,
      },
      {
        name: 'Brett Young',
        gender: 'Male',
        class: '2 blue',
        balance: 0,
      },
    ];


  }
  constructor() {}
}
