import { Component, OnInit } from '@angular/core';
import { toysService } from '../shared/toysService';
import { Charity } from '../shared/charity';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-charities-list',
  templateUrl: './charities-list.component.html',
  styleUrls: ['./charities-list.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(2000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class CharitiesListComponent implements OnInit {

  charities: Set<Charity> = new Set<Charity>();

  constructor(private toysService : toysService) { }

  ngOnInit() {
    this.getCharities();
  }

  getCharities(){
    this.charities = this.toysService.getAllCharities();
  }
}
