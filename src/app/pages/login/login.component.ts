import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackgroundComponent } from '../../components/background/background.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    BackgroundComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    RouterModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
