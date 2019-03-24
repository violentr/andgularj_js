import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template:  `
     <div>
       <h1> {{ title }} </h1>
       <passenger-count
         [items]="passengers">
       </passenger-count>
       <passenger-detail></passenger-detail>
       <h3> Airline Passengers </h3>
       <ul>
         <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
            [class.checked-in]="passenger.checkedIn"
          ></span>
          {{ i }} : {{ passenger.fullname }}
         <div class="date">Check in date: {{ passenger.checkedIn ? (passenger.checkedInDate | date: 'y MMMM d' | uppercase) :  'Not checked in'}} </div>
         <br />
         <div class="children"> Children: {{ passenger.children?.length || 0}}</div>
         </li>
       </ul>
     </div>`,
})

export class PassengerDashboardComponent implements OnInit{
  title: string;

  passengers: Passenger[]

  constructor(){
    this.title = "Dashboard";
  }

  ngOnInit(){
    console.log("started ngOnInit")
    this.passengers = [
      {
        id: 1,
        fullname: 'Bill',
        checkedIn: true,
        checkedInDate: 1553455266108,
        children: [{name: 'Jessica', age: 10}]
      },
      {
        id: 2,
        fullname: 'James',
        checkedIn: false,
        children: null
      },
      {
        id: 3,
        fullname: 'Zoe',
        checkedIn: true,
        checkedInDate: 1277514000000,
        children: [{name: 'Peter', age: 16}]
      },
      {
        id: 4,
        fullname: 'Cassandra',
        checkedIn: false,
        children: null
      },
      {
        id: 5,
        fullname: 'Julie',
        checkedIn: true,
        checkedInDate: 23424214,
        children: [{name: 'Fiby', age: 16}]
      },
    ]
  }
}
