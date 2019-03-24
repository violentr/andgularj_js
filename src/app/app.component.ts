import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
     <div class="app">
       <h1> {{ title }} </h1>
       <img [src]="logo">
       <button (click)="handleClick(username.value)">
         Get value
       </button>
       <input type="text" #username >
       <div> {{ name }} </div>
     </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;
  logo: string = "assets/img/logo.png";
  name: string = "User";

  handleClick(value: string){
    this.name = value
    console.log("clicked", value)
  }

  constructor(){
    this.title = "Ultimate Angular";
  }
}
