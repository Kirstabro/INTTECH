import { Component, OnInit } from '@angular/core';
import { Person } from '../person' ;
import { InputService } from '../services/input.service';
import { EventhandlerService } from '../services/eventhandler.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  user?: Person = {
    id: null,
    name: "",
    value: undefined,
    item: ""
  };

  users: Person[] = [];

  constructor(
    private inputService: InputService,
    private eventHandler: EventhandlerService) { }

  addUser(): void {
    this.inputService.addUser(this.user as Person)
        .subscribe(data => this.eventHandler.emitEvent());
  }

  calculate(): void {
    //TODO : verreken alles
  }

  getUsers(): void {
    this.inputService.getUsers()
        .subscribe(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
