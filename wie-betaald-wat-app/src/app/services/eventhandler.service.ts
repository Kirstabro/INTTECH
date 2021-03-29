import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventhandlerService {
  $reload = new EventEmitter();

  constructor() { }

  emitEvent(){
    this.$reload.emit();
  }
}
