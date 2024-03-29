import { Component, OnInit } from '@angular/core';

import { Person } from '../../models/person';
import { HttpService } from '../../services/http.service';
import { EventhandlerService } from '../../services/eventhandler.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users?: Person[];

  totalAmount: number;

  constructor(private HttpService: HttpService,
    private eventHandler: EventhandlerService) { }

  ngOnInit(): void {
    this.getUsers();
    this.eventHandler.$reload.subscribe(data => this.getUsers());
  }

  calculate(): void {
    this.eventHandler.emitCalculateEvent();
 }

  getUsers(): void {
    this.HttpService.getUsers()
      .subscribe(users => {
        this.users = users,
        this.calculateTotal();
      });
  }

  calculateTotal(): void {
    let temp: number = 0;
    this.users.map(user => {
      temp += +user.value;
    });
    this.totalAmount = temp;
  }

}

