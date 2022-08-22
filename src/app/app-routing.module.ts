import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { AllStudentsComponent } from './Home/all-students/all-students.component';
import { BalanceComponent } from './Home/balance/balance.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { ErrorComponent } from './Home/error/error.component';
import { LoginComponent } from './Home/login/login.component';
import { NoBalanceComponent } from './Home/no-balance/no-balance.component';
import { StudentsComponent } from './Home/students/students.component';
import { WelcomeComponent } from './Home/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, children:[
    {path: 'login',component: LoginComponent},
  ]},
  {path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent, children:[
    {path: '', canActivate:[AuthGuard], component:AllStudentsComponent},
    {path: 'addstudent', canActivate:[AuthGuard], component:StudentsComponent},
    {path: 'balance', canActivate:[AuthGuard], component:BalanceComponent},
    {path: 'nobalance',canActivate:[AuthGuard], component:NoBalanceComponent}
  ]},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
