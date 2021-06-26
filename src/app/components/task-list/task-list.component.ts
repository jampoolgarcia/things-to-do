import { Component, OnInit } from '@angular/core';
import { TaskI } from 'src/app/model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: ['']
})
export class TaskListComponent implements OnInit {

  public tasksCompleted: TaskI[] = [];
  public tasksNoComnpleted: TaskI[] = []; 
  public isShowInputTask: boolean = false;

  constructor() { }

  showInputTask(){
    this.isShowInputTask = !this.isShowInputTask;
  }

  ngOnInit(): void {
  }

}
