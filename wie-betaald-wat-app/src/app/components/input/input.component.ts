import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person' ;
import { HttpService } from '../../services/http.service';
import { EventhandlerService } from '../../services/eventhandler.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  user?: Person = {
    id: null,
    name: undefined,
    value: undefined,
    item: undefined
  };

  users: Person[] = [];

  constructor(
    private HttpService: HttpService,
    private eventHandler: EventhandlerService) { }

  addUser(): void {
    if (!this.user.name)
    {return;}
    this.HttpService.addUser(this.user as Person)
         .subscribe(data => this.eventHandler.emitEvent());
  }

  calculate(): void {
     this.eventHandler.emitCalculateEvent();
  }

  getUsers(): void {
    this.HttpService.getUsers()
        .subscribe(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }
}

