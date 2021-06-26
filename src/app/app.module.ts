// core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// root component
import { AppComponent } from './app.component';

// components
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task-list/task/task.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
