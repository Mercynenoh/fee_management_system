import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=''
  password=''
  islogin=false
  valid=false
  constructor( private authservice:AuthService , private router:Router) {
    localStorage.setItem("username","Admin");
    localStorage.setItem("password","Admin");
   }

  ngOnInit(): void {
    console.log(this.islogin);

  }

  onLogin(){
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if (this.username==='' || this.password!==''){
      this.islogin=true
      setTimeout(() => {
        this.islogin=false
      }, 2000);
    }
    if (this.username!==username || this.password!==password){
      this.valid=true
      setTimeout(() => {
        this.valid=false
      }, 2000);
    }else{
      this.username=''
      this.password=''
      let token =  localStorage.setItem("token","6o5nuVTiNpVVUkiFG=44tb9PplT0JHtvDAJOKwMhKZ2zR/uazkL29VaXi4Nn1mxZ5L4ZU6qVkxoGTVLi7PYdtoss21G9oHXSP6eVcDlH5aIYVnH!OnuJ-j8-WCAE/S9!g8Uj6j4goZ!27R54yuWfEPSPErSiYnoqlARy9pMG59ic6eeGYlR!JJMf7EL50wQ/73CFRZ8EK8oF?8E6dLiKaPQfk8XE5-Q1aPopeoCQPtCQl-vkW02DjpZ?9B?0CU9");
     this.router.navigate(['dashboard'])
      this.islogin=true
      console.log(token);
    }


  }


}
