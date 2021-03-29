import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from '../person' ;

@Injectable({
  providedIn: 'root'
})
export class InMemoryDatabaseService implements InMemoryDatabaseService {
  createDb() {
    const users = [
      {name: 'Kirsten', value: 10.50, item: "bier"}
    ];

    return {users}};
    genId(users: Person[]): number {
      return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
    }
  }
