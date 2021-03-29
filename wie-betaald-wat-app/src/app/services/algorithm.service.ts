import { Injectable } from '@angular/core';
import { Person } from '../models/person';

import { Transaction } from 'src/app/models/transaction';

import {Observable, of } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})


export class AlgorithmService {

  constructor() { }

  calculate(users : Transaction[], totalAmount:number){
    return;
  }


}
