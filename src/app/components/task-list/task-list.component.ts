import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  public desc: FormControl = new FormControl('', [Validators.required]);

  constructor() {}

  showInputTask(){
    this.isShowInputTask = true;
  }

  addTask(){
    const task: TaskI = {
      date: new Date(),
      desciption: this.desc.value,
      isComplete: false
    }
    this.tasksNoComnpleted.push(task);
    this.desc.reset();
    this.isShowInputTask = false;
  }

  ngOnInit(): void {
  }

}
