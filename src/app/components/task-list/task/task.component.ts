import { ThisReceiver } from '@angular/compiler';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TaskI } from 'src/app/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [
  ]
})
export class TaskComponent{

  @Input() task: TaskI;
  @Input() index: number;

  @Output() check = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  onCheck(){
   this.check.emit(this.index);
  }

  onDelete(){
    this.delete.emit(this.index);
  }

}
