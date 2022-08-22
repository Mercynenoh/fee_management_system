import { Injectable } from '@angular/core';
import { LoginComponent } from '../Home/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  constructor() { }
}
