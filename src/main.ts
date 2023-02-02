import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CustomTemplateComponent } from './components/custom-template/custom-template.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CustomTemplateComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    
    <app-custom-template></app-custom-template>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
