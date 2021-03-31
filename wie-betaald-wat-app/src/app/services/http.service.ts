import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Person } from '../models/person';

import {Observable, of } from 'rxjs'; 
import {catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient ) { }

    /* GET: return all users */
  getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(this.usersUrl).pipe(
      catchError(this.handleError<Person[]>('getUsers', []))
    );
  }

  /*POST: new user */
  addUser(user: Person): Observable<Person> {
    console.log("POST", user);
    return this.http.post<Person>(this.usersUrl, user, this.httpOptions).pipe(
      catchError(this.handleError<Person>('addPerson')));
  }

   /*PUT: update existing user */
   updateUser(user: Person): Observable<any> {
     console.log("PUT", user);
    return this.http.put<Person>(this.usersUrl, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('udpatePerson')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}
