import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'
@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
   <div>
     <li>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      {{ detail.fullname }}
     <div class="date">Check in date: {{ detail.checkedIn ? (detail.checkedInDate | date: 'y MMMM d' | uppercase) :  'Not checked in'}} </div>
         <div class="children"> Children: {{ detail.children?.length || 0}}</div>
     </li>
     <br />
   </div>`,

})

export class PassengerDetailComponent{

  @Input()
  detail: Passenger;
  constructor(){
  }
}
