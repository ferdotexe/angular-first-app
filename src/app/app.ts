import { Component  } from '@angular/core';
import { Header } from "./header/header";
import { UserComponent } from "./user/user.component";
import { Task } from "./task/task";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, UserComponent, Task],
  templateUrl: './app.html',
  styleUrls: 
  ['./app.css']
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string){
    this.selectedUserId = id;
    
}
}


