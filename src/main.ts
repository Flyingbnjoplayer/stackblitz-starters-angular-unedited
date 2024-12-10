import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'myNotes';
}

bootstrapApplication(App);
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `./app.component.html`,
  styleUrl: `./app.component.css`,
})
export class AppComponent {}

bootstrapApplication(AppComponent);
