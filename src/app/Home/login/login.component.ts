import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=''
  password=''

  constructor( private authservice:AuthService) {
    localStorage.setItem("username","Admin");
    localStorage.setItem("password","Admin");
   }

  ngOnInit(): void {

  }

  onLogin(){
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if (this.username!==username || this.password!==password){
      alert('Check details and try again!!')
    }else{
      this.username=''
      this.password=''
      let token =  localStorage.setItem("token","6o5nuVTiNpVVUkiFG=44tb9PplT0JHtvDAJOKwMhKZ2zR/uazkL29VaXi4Nn1mxZ5L4ZU6qVkxoGTVLi7PYdtoss21G9oHXSP6eVcDlH5aIYVnH!OnuJ-j8-WCAE/S9!g8Uj6j4goZ!27R54yuWfEPSPErSiYnoqlARy9pMG59ic6eeGYlR!JJMf7EL50wQ/73CFRZ8EK8oF?8E6dLiKaPQfk8XE5-Q1aPopeoCQPtCQl-vkW02DjpZ?9B?0CU9");
      location.href='dashboard'
      console.log(token);
    }


  }


}
