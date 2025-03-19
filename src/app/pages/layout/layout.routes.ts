import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { BoardsComponent } from '../boards/boards.component';
import { ProfileComponent } from '../profile/profile.component';
import { UsersTableComponent } from '../users-table/users-table.component';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'boards',
        pathMatch: 'full',
      },
      {
        path: 'boards',
        component: BoardsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'users',
        component: UsersTableComponent,
      },
    ],
  },
];
