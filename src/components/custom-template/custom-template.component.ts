import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-template',
  templateUrl: './custom-template.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./custom-template.component.css']
})
export class CustomTemplateComponent implements OnInit {

  totalEstimate = 10;

  ctx = {estimate: this.totalEstimate};

  constructor() { 
    this.chnageLessonsNumber()
  }

  chnageLessonsNumber() {
    setInterval(() => {
      this.totalEstimate++; // Inutile
      this.ctx.estimate++;
    }, 2000)
  }

  ngOnInit() {
  }

}