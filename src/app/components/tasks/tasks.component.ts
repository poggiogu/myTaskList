import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TaskService } from 'src/app/services/task.service';
import { Task  } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks:Task[] = [];

  constructor(
    private taskService : TaskService
  ) {}
  
  ngOnInit(): void { 
    //como una promesa
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks) ) //método subscribe de los observables
  }


}
