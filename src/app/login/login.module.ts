import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TemplatesModule,
    FormsModule
  ]
})

export class LoginModule { }
