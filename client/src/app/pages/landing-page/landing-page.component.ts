import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [

    trigger('slideInLeft', [
      transition(':enter', [
        style({transform: 'translateX(-300%)', opacity: '0'}),
        animate('700ms ease-in', style({transform: 'translateX(0%)', opacity: '1'}))
      ]),
      
        
      ]),
      trigger('leaveLeft', [
        transition(':enter', [
          style({transform: 'translateX(300%)', opacity: '0'}),
          animate('700ms ease-in', style({transform: 'translateX(-50%)'}))
        ]),
    ]),

    trigger('slideInRight', [
      transition(':enter', [
        style({transform: 'translateX(300%)', opacity: '0'}),
        animate('700ms ease-in', style({transform: 'translateY(0%)', opacity: '1'}))
      ]),
      transition(':leave', [
        animate('700ms ease-in', style({transform: 'translateY(-50%)'}))
      ])
    ])
  ],


    
})
export class LandingPageComponent implements OnInit {

  current = 'enter';
 
    changeState() {
      this.current = this.current === 'enter' ? 'leaveLeft' : 'leaveLeft';
    }

      


  constructor() { }

  ngOnInit() {

    
    
    
    



}

    
}


