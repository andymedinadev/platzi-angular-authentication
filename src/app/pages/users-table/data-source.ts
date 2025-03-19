import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user.model';

export class DataSourceUsers extends DataSource<User> {
  private dataSubject = new BehaviorSubject<User[]>([]);
  private originalData: User[] = [];

  disconnect() {}

  connect(): Observable<User[]> {
    return this.dataSubject.asObservable();
  }

  init(data: User[]) {
    this.originalData = data;
    this.dataSubject.next(data);
  }
}
