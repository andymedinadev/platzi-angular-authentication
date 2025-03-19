import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSourceUsers } from './data-source';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CdkTableModule, NgClass],
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  dataSource = new DataSourceUsers();

  constructor() {
    this.dataSource.init([
      {
        id: 1,
        name: 'User 1',
        email: 'mail@mail.com',
        avatar: 'https://picsum.photos/150/150',
      },
      {
        id: 2,
        name: 'User 2',
        email: 'mail2@mail.com',
        avatar: 'https://picsum.photos/150/150',
      },
      {
        id: 3,
        name: 'User 3',
        email: 'mail3@mail.com',
        avatar: 'https://picsum.photos/150/150',
      },
    ]);
  }
}
