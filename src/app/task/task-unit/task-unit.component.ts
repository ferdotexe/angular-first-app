import { Component, EventEmitter, Input, Output } from '@angular/core';
import {TaskUnit} from './taskUnit.model';


@Component({
  selector: 'app-task-unit',
  imports: [],
  templateUrl: './task-unit.html',
  styleUrl: './task-unit.css'
})
export class TaskUnitComponent {

  @Input({required: true}) task!: TaskUnit;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }

}
