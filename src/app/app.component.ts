import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
    checkedIn: boolean,
    checkedInDate?: number
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
         <div class="date">Check in date: {{ passenger.checkedIn ? (passenger.checkedInDate | date: 'y MMMM d' | uppercase) :  'Not checked in'}} </div>
         <br />
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
      checkedIn: true,
      checkedInDate: 1553455266108
    },
    {
      id: 2,
      fullname: 'James',
      checkedIn: false
    },
    {
      id: 3,
      fullname: 'Zoe',
      checkedIn: true,
      checkedInDate: 1277514000000
    },
    {
      id: 4,
      fullname: 'Cassandra',
      checkedIn: false
    },
    {
      id: 5,
      fullname: 'Julie',
      checkedIn: true,
      checkedInDate: 23424214
    },
  ]

  constructor(){
    this.title = "Ultimate Angular";
  }
}
