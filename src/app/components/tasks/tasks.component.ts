import { Component, OnInit } from '@angular/core';
import { Task  } from 'src/app/Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TaskService } from 'src/app/services/task.service';


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
    this.taskService.getTasks().subscribe((tasks) => 
    (this.tasks = tasks
  )); //método subscribe de los observables
  }

  deleteTask(task:Task) {
    this.taskService.deleteTask(task)
    .subscribe( ()=> (
      this.tasks = this.tasks.filter ((t) => {
        return  t.id !== task.id 
        })
    ))
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>(
      this.tasks.push(task)
    ))
  }

}
