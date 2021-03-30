import { Injectable } from '@angular/core';
import { Payment, Debt , Transaction} from '../models/person';

import {Observable, of } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})

export class AlgorithmService {

  constructor() { }

  payments: Payment[] = [];
  users: Transaction[] = [];

  calculate(users : Transaction[], totalAmount : number): Payment[]
  {
    this.users = users;
    this.payments = [];

    console.log("total:", totalAmount);

    const averageCost = totalAmount / this.users.length;

    const payers: Debt[] = [];
    const recievers: Debt[] = [];

    console.log("average: ", averageCost);

    this.users.forEach((user) => {
      const diff = user.value - averageCost;
      if (diff > 0)
      {
        recievers.push({
          name: user.name,
          value: diff
        } as Debt);
      } else{
        payers.push({
          name: user.name,
          value: -diff
        } as Debt);
      }
    });

    

    recievers.sort((a,b) => a.value - b.value);
    payers.sort((a,b) => a.value - b.value);

    while (recievers.length > 0 && payers.length > 0)
    {
      const receiver = recievers[0];
      const payer = payers[0];

      if (payer.value >= receiver.value) {
        this.payments.push({
          payer: payer.name,
          value: receiver.value,
          receiver: receiver.name
        });
        payer.value -= receiver.value;
        recievers.splice( 0, 1);
        if (payer.value == 0 ) {
          payers.splice(0, 1);
        }
      } else {
        this.payments.push({
          payer: payer.name,
          value: payer.value,
          receiver: receiver.name
        });

        receiver.value -= payer.value;
        payers.splice(0, 1);
      }
    }
    console.log("END OF ALGORITH");
    console.log("Payments: ", this.payments);
    return this.payments;
  }
}

