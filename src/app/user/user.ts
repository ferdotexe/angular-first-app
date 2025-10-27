import { Component, EventEmitter, Input, Output, output } from '@angular/core';
 

type UserType = {
  id: string;
  avatar: string;
  name: string
}


@Component({
  selector: 'app-user',
  imports: [],
  standalone:true,
  templateUrl: './user.html',
  styleUrls: 
  ['./user.css']
})

export class User {

  @Input({required:true}) user!: UserType;
   
  
  @Output() select =  new EventEmitter<string>();

  

  

  get imagePath(){
      return '../assets/users/'+ this.user.avatar;
  }

  
 

  onSelectUser() {
   this.select.emit(this.user.id);
    
  }
}
