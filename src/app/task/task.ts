import { Component, Input, input } from '@angular/core';
import { TaskUnitComponent } from "./task-unit/task-unit.component";
import { NewTask } from "./new-task/new-task";
import { newTaskDate } from './task-unit/taskUnit.model';
import { TaskService } from './task.service';


@Component({
  selector: 'app-task',
  imports: [TaskUnitComponent, NewTask],
  standalone: true,
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string ;
  isAddingTask = false;
  private tasksService = new TaskService();
  
  

  

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){
  
  }
  
  onStartAddTask(){
      this.isAddingTask = true;
  }

  onCancelAddTask(){
     this.isAddingTask = false;
 }

 onAddTask(taskData: newTaskDate){
 

 this.isAddingTask = false;
}
}
