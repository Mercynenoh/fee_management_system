import { Injectable } from '@angular/core';
import { LoginComponent } from '../Home/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }
// isLoggedIn= false

// loggedin(){
// this.isLoggedIn=true
// }
// logout(){
//   this.isLoggedIn=false
// }
// isauthnticated(){
//  const promise = new Promise<boolean>((resolve,reject)=>{
//   setTimeout(() => {
// resolve(this.isLoggedIn)
//   }, 500);
//  })
//  return promise
// }
  constructor() { }
}
