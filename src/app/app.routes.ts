import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { SingleBoardComponent } from './pages/single-board/single-board.component';
import { UsersTableComponent } from './pages/users-table/users-table.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'boards',
    component: BoardsComponent,
  },
  {
    path: 'board',
    component: SingleBoardComponent,
  },
  {
    path: 'users',
    component: UsersTableComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
  },
];
