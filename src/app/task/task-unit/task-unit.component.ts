import { Component, EventEmitter, Input, Output } from '@angular/core';
import {TaskUnit} from './taskUnit.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task-unit',
  imports: [Card, DatePipe],
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
