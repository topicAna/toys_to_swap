import { Component, OnInit,} from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { NavigationEnd } from '@angular/router';
import {Router} from '@angular/router';
import { Participate } from 'src/app/shared/participate';
import { Event } from 'src/app/shared/event';
import { toysService } from 'src/app/shared/toysService';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-secret-santa',
  templateUrl: './secret-santa.component.html',
  styleUrls: ['./secret-santa.component.css'],
  animations: [


      trigger('fade', [ 
        transition('void => *', [
          style({ opacity: 0 }), 
          animate(2000, style({opacity: 1}))
        ]) 
      ]),
      
     
  ],

})

export class SecretSantaComponent implements OnInit {

  private events: Event[];
  newEvent: Event;
  participate: Participate;
  constructor(private eventService: EventService, private router: Router, private toyService: toysService) {
   }

  ngOnInit() {
    this.eventService.getEvents().subscribe(response => {
      this.events = response;
    });
  }
  showDetails(event){
    this.newEvent = event;

  }
  comeHome(){
    this.router.navigate([`/`]);
  }

  addEvent(event: Event)
  {
    this.participate = new Participate(1, event.id);
    this.toyService.insertParticipate(this.participate).subscribe(result => console.log(result))
  }


}
