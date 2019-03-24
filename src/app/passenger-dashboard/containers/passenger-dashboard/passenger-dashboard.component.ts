import { Component } from '@angular/core';

interface Child {
 name: string,
 age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate?: number,
  children: Child[] | null
}

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template:  `
     <div>
      {{ title }}
     </div>`,
})

export class PassengerDashboardComponent{
  title: string;

  passengers: Passenger[] =[
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

  constructor(){
    this.title = "Dashboard";
  }
}
