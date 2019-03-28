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
       <passenger-detail
          *ngFor="let passenger of passengers"
          [detail]="passenger">
       </passenger-detail>
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
