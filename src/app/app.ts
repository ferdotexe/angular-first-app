import { Component  } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
import { Task } from "./task/task";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User, Task],
  templateUrl: './app.html',
  styleUrls: 
  ['./app.css']
})
export class App {
  users = DUMMY_USERS;
  selecteUserId = 'u1';

  get selectedUser(){
    return this.users.find((user) => user.id === this.selecteUserId)!;
  }

  onSelectedUser(id: string){
    this.selecteUserId = id;
    
}
}


