import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
     <div class="app">
       <h1 [innerHTML]="title"> </h1>
       <h1> {{ title }} </h1>
       <div> {{ numberOne + numberTwo }} </div>
     </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;

  constructor(){
    this.title = "Ultimate Angular";
  }
}
