import { Component, EventEmitter, Input, Output, output } from '@angular/core';
 




@Component({
  selector: 'app-user',
  imports: [],
  standalone:true,
  templateUrl: './user.html',
  styleUrls: 
  ['./user.css']
})

export class User {

  @Input({required: true}) id!:string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select =  new EventEmitter<string>();

  

  

  get imagePath(){
      return '../assets/users/'+ this.avatar;
  }

  
 

  onSelectUser() {
   this.select.emit(this.id);
    
  }
}
