import { Component, Input,  } from '@angular/core';





@Component({
  selector: 'app-user',
  imports: [],
  standalone:true,
  templateUrl: './user.html',
  styleUrls: 
  ['./user.css']
})

export class User {

  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  

  get imagePath(){
      return '../assets/users/'+ this.avatar;
  }

  
 

  onSelectUser() {
   
    
  }
}
