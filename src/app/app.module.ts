// core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// root component
import { AppComponent } from './app.component';

// components
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
