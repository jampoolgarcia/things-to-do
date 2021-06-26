import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskI } from 'src/app/model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: ['']
})
export class TaskListComponent {

  public tasksCompleted: TaskI[] = [];
  public tasksNoComnpleted: TaskI[] = []; 
  public isShowInputTask: boolean = false;
  public isShowCompleted: boolean = true;
  public desc: FormControl = new FormControl('', [Validators.required]);

  constructor() {}

  showInputTask(){
    this.isShowInputTask = true;
  }

  addTask(){
    const task: TaskI = {
      date: new Date(),
      description: this.desc.value,
      isCompleted: false
    }
    this.tasksNoComnpleted.push(task);
    this.desc.reset();
    this.isShowInputTask = false;
  }

  delete(index:number){
    this.tasksNoComnpleted.splice(index, 1);
  }

  check(index:number){
    let task: TaskI = this.tasksNoComnpleted[index];
    task.date = new Date();
    task.isCompleted = true;
    this.tasksCompleted.push(task);
    this.delete(index);
  }

  showCompleted(){
    this.isShowCompleted = !this.isShowCompleted;
  }

}
