import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthService) { }
  ngOnInit(): void {

  }
onclick(){
  location.href='login'
}
// onClick(){
//   location.href=''
// }
onLogout(){
  localStorage.clear()
  location.href=''
}
addstyle(){
  return 'style'
}
}
