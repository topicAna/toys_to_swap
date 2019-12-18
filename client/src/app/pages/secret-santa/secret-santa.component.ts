import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-secret-santa',
  templateUrl: './secret-santa.component.html',
  styleUrls: ['./secret-santa.component.css']
})
export class SecretSantaComponent implements OnInit {

  private events: Event[];
  newEvent: Event;
  constructor(private eventService: EventService) { }

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

  

}
