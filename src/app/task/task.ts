import { Component, Input, input } from '@angular/core';
import { TaskUnitComponent } from "./task-unit/task-unit.component";
import { NewTask } from "./new-task/new-task";
import { newTaskDate } from './task-unit/taskUnit.model';


@Component({
  selector: 'app-task',
  imports: [TaskUnitComponent, NewTask],
  standalone: true,
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {

  @Input({required: true}) userId?: string;
  @Input({required: true}) name?: string ;
  isAddingTask = false;
  
  

  tasks = [
    {
    id:'t1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced',
    dueDate: '2025-12-31'
    },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  }
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string){
   this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  
  onStartAddTask(){
      this.isAddingTask = true;
  }

  onCancelAddTask(){
     this.isAddingTask = false;
 }

 onAddTask(taskData: newTaskDate){
  this.tasks.push({
    id: new Date().getTime().toString(),
    userId: this.userId,
    title: taskData.summary,
    summary: taskData.summary,
    dueDate: taskData.date
 }
}
