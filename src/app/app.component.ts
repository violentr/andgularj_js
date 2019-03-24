import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
     <div class="app">
       <h1 [innerHTML]="title"> </h1>
       <h1> {{ title }} </h1>
       <div> {{ numberOne + numberTwo }} </div>
       <img [src]="logo">
       <button (click)="handleClick()">
        Change name
       </button>
       <input type="text"
        [(ngModel)]="name">
       <div> {{ name }} </div>
     </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  logo: string = "assets/img/logo.png";
  name: string = "User";

  handleClick(){
    this.name = "TEST User"
    console.log("clicked")
  }

  handleChange(value: string) {
    this.name = value
    console.log("value", value)
  }

  constructor(){
    this.title = "Ultimate Angular";
  }
}
