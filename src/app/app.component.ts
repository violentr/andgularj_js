import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  template:  `
     <div class="app">
       <h1> {{ title }} </h1>
       <h3> Airline Passengers </h3>
       <ul>
         <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
            [class.checked-in]="passenger.checkedIn"
          ></span>
          {{ i }} : {{ passenger.fullname }}
         </li>
       </ul>
       <h3> Airline Passengers </h3>
       <ul>
         <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
            [ngStyle]="{ 'backgroundColor': passenger.checkedIn ? 'green' : 'red' }"
          ></span>
          {{ i }} : {{ passenger.fullname }}
         </li>
       </ul>
     </div>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string;

  passengers: Passenger[] =[
    {
      id: 1,
      fullname: 'Bill',
      checkedIn: true
    },
    {
      id: 2,
      fullname: 'James',
      checkedIn: false
    },
    {
      id: 3,
      fullname: 'Zoe',
      checkedIn: true
    },
    {
      id: 4,
      fullname: 'Cassandra',
      checkedIn: false
    },
    {
      id: 5,
      fullname: 'Julie',
      checkedIn: true
    },
  ]

  constructor(){
    this.title = "Ultimate Angular";
  }
}
