import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  standalone: true,
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {

  @Input() name?: string ;
  
}
