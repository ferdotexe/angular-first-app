import { Component, EventEmitter, Input, Output } from '@angular/core';
import {TaskUnit} from './taskUnit.model';
import { Card } from "../../shared/card/card";


@Component({
  selector: 'app-task-unit',
  imports: [Card],
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
