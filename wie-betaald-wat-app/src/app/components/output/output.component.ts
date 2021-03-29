import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { AlgorithmService } from 'src/app/services/algorithm.service';
import { EventhandlerService } from 'src/app/services/eventhandler.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(
    private eventHandler: EventhandlerService,
    private httpService: HttpService,
    private algorithmService: AlgorithmService) { }

  users: Transaction[] = [];
  totalamount: number;

  
  ngOnInit(): void {
    //this.getUsers();
    this.eventHandler.$calculate.subscribe(data => this.getUsers());
  }

  calculate(): void {
    this.algorithmService.calculate(this.users, this.totalamount);
  }

  calculateTotat(): void{
    let temp: number = 0;
    this.users.map(user => {
      temp += +user.value;
    });
    this.totalamount = temp;
  }

  getUsers(): void {
    this.users = [];
    
    console.log("GETUSERS()");

    this.httpService.getUsers().subscribe(allUsers => {
      allUsers.map(data => {
        if (this.users[0] == null) {
          this.users.push({
            name: data.name,
            value: data.value
          } as Transaction);
        }
        else {
          let exists = false;
          this.users.map(user => {
            if (user.name === data.name) {
              exists = true;
              user.value += +data.value;
            } 
          })
          if (!exists) {
            this.users.push({
              name: data.name,
              value: data.value
            } as Transaction);
          }
          exists = false;
        }
      })
    })
  }

}
