import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventhandlerService {
  $reload = new EventEmitter();
  $calculate = new EventEmitter();

  constructor() { }

  emitEvent(){
    this.$reload.emit();
  }

  emitCalculateEvent(){
    this.$calculate.emit();
  }
}
