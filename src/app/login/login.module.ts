import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-tooltip';
import { UseractivateComponent } from './useractivate/useractivate.component';


export const routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent ,data: { breadcrumb: 'Login' }},
  { path:'userverification', component: UseractivateComponent }

];

@NgModule({
  declarations: [
    LoginComponent,
    UseractivateComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SharedModule,
    TooltipModule
  ]
})

export class LoginModule { }
