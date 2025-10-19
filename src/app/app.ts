import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from "./user/user";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrls: 
  ['./app.css']
})
export class App {
  protected readonly title = signal('first-angular-app');
}
