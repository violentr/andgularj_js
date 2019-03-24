import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
     <div class="app">
       <h1> {{ title }} </h1>
       <img [src]="logo">
       <input type="text"
        [value]="name"
        (input)="handleChange($event.target.value)">
       <div *ngIf="name.length > 2"> Searching for... {{ name }} </div>
     </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;
  logo: string = "assets/img/logo.png";
  name: string = "";

  handleChange(value: string){
    this.name = value
  }

  constructor(){
    this.title = "Ultimate Angular";
  }
}
