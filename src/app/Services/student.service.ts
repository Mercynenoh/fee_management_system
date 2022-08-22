import { Injectable } from '@angular/core';
import { Student } from '../Interfaces/StudentInterface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  getStudents(): Student[] {
    return [
      {
        name: 'Sophie Mcpherson',
        gender: 'Female',
        class: '2',
        balance: 5000,
      },
      {
        name: 'Randolph Barajas',
        gender: 'Male',
        class: '3',
        balance: 10000,
      },
      {
        name: 'Jayson Macias',
        gender: 'Male',
        class: '2',
        balance: 0,
      },
      {
        name: 'Yolanda Gallegos',
        gender: 'Female',
        class: '2',
        balance: 50000,
      },
      {
        name: 'Josefa Rio',
        gender: 'Female',
        class: '3',
        balance: 0,
      },
      {
        name: 'Hiram Hickman',
        gender: 'Male',
        class: '2',
        balance: 0,
      },
    ];


  }
  constructor() {}
}
