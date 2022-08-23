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
  {path: 'dashboard', canActivateChild:[AuthGuard], component: DashboardComponent, children:[
    {path: '',  component:AllStudentsComponent},
    {path: 'addstudent',  component:StudentsComponent},
    {path: 'balance',  component:BalanceComponent},
    {path: 'nobalance', component:NoBalanceComponent}
  ]},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
