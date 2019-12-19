import { Component, OnInit } from '@angular/core';
import { toysService } from 'src/app/shared/toysService';
import { Toy } from '../../shared/toy';
import { Wish } from 'src/app/shared/wish';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.css']
})
export class ExchangeListComponent implements OnInit {

  toys: Set<Toy> = new Set<Toy>();
  wish: Wish;
  wishList: Set<Toy> = new Set<Toy>();

  constructor(private toyService: toysService) { }

  ngOnInit() {
    this.getToys();
  }

  getToys()
  {
    this.toyService.getToys().subscribe(response => response.forEach(t => this.toys.add(t)));
  }

  exchange(toy: Toy)
  {
    this.wish = new Wish(1, toy.id)
    this.toyService.addWish(this.wish).subscribe(response => {
      console.log(response);
    });
    
  }

  getWish(id:number)
  {
    this.toyService.getWish(id).subscribe(response => response.forEach(t => this.wishList.add(t)));
    console.log(this.wishList)
  }

}
