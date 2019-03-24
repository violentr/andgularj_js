import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
     <div class="app">
       <h1 [innerHTML]="title"> </h1>
       <h1> {{ title }} </h1>
       <div> {{ numberOne + numberTwo }} </div>
       <img [src]="logo">
       <input type="text"
        [value]="name"
        (input)="handleInput($event)">
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

  handleInput(event: any) {
    this.name = event.target.value
    console.log("Event", event)
  }

  constructor(){
    this.title = "Ultimate Angular";
  }
}
