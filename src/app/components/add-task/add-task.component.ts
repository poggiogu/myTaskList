import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  [x: string]: any;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text:string = "";
  day:string = "";
  reminder:boolean = false;
  id : number = 0;
  tasks:Task[] = [];
  showAddTask: boolean = false;
  subscription?: Subscription;
    
  constructor( 
    private taskService : TaskService,
    private uiService:UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  };
  ngOnInit (): void {}
  
  //modified code
  getId() {
    this.taskService.getTasks().subscribe((tasks: any) => 
    (this.id = this.tasks.length)) 
    this.id += 2
  }  
  //modified code

  onSubmit(){
    if(this.text.length === 0){
      alert("Please add a task!")
      return
    }
    const {text, day, reminder, id} = this 
    const newTask = {text, day, reminder, id};

    this.onAddTask.emit(newTask)

  }

}
