import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Home/navbar/navbar.component'
import { LoginComponent } from './Home/login/login.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { StudentsComponent } from './Home/students/students.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipe/filter.pipe';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './Home/welcome/welcome.component';
import { AuthGuard } from './Guards/auth.guard';
import { ErrorComponent } from './Home/error/error.component';
import { BalanceComponent } from './Home/balance/balance.component';
import { AllStudentsComponent } from './Home/all-students/all-students.component';
import { NoBalanceComponent } from './Home/no-balance/no-balance.component';
import { NamesPipe } from './Pipe/names.pipe';
import { WelcomePipe } from './Pipe/class.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    StudentsComponent,
    FilterPipe,
    WelcomeComponent,
    ErrorComponent,
    BalanceComponent,
    AllStudentsComponent,
    NoBalanceComponent,
    NamesPipe,
    WelcomePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent, children:[
        {path: 'login',component: LoginComponent},
      ]},
      {path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent, children:[
        {path: '', canActivate:[AuthGuard], component:AllStudentsComponent},
        {path: 'balance', canActivate:[AuthGuard], component:BalanceComponent},
        {path: 'nobalance',canActivate:[AuthGuard], component:NoBalanceComponent}
      ]},
      {path: '**', component: ErrorComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
