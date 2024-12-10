import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrl: `./app.component.css`,
})
export class AppComponent { }

bootstrapApplication(AppComponent);
