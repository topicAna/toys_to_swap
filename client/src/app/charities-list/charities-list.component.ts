import { Component, OnInit } from '@angular/core';
import { toysService } from '../shared/toysService';
import { Charity } from '../shared/charity';

@Component({
  selector: 'app-charities-list',
  templateUrl: './charities-list.component.html',
  styleUrls: ['./charities-list.component.css']
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
