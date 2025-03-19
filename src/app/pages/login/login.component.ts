import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
