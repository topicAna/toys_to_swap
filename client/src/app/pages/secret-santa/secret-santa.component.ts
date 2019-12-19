import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { NavigationEnd } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-secret-santa',
  templateUrl: './secret-santa.component.html',
  styleUrls: ['./secret-santa.component.css']
})
export class SecretSantaComponent implements OnInit {

  private events: Event[];
  newEvent: Event;
  constructor(private eventService: EventService, private router: Router) {
   }

  ngOnInit() {
    this.eventService.getEvents().subscribe(response => {
      this.events = response;
      console.log(this.events)
    });
  }
  showDetails(event){
    this.newEvent = event;
    console.log(this.newEvent)
  }
  comeHome(){
    this.router.navigate([`/`]);
  }


}
