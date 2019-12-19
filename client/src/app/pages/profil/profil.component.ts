import { Component, OnInit } from '@angular/core';
import { toysService } from 'src/app/shared/toysService';
import { User } from 'src/app/shared/user';
import { Event } from '../../shared/event';
import { Participate } from 'src/app/shared/participate';
import { Router } from '@angular/router';
import { Wish } from 'src/app/shared/wish';
import { Toy } from 'src/app/shared/toy';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  userWish: boolean = true;
  toysByUser: boolean = true;
  users: Set<User> = new Set<User>();
  user: User;
  wish: Set<Toy> = new Set<Toy>();
  userToys: Set<Toy> = new Set<Toy>();
  participates: Set<Participate> = new Set<Participate>();
  constructor(private toyService: toysService, private router: Router) { }

  ngOnInit() {
    this.getUser();
    this.getParticipates(1);
    this.getWish(1);
    this.getToysByUser(1);
    
  }

  getUser()
  {
    return this.toyService.getUser('mayolle').subscribe(result => this.users.add(result));
  }

  getParticipates(id: number)
  {
    this.toyService.getParticipatebyUser(id).subscribe(result => result.forEach(p => this.participates.add(p)));
  }

  deleteWish(toy: Toy)
  {
   this.toyService.deleteWishByUser(toy.id).subscribe(result => console.log(result))
   location.reload();
  }

  deleteEvent(p: Event)
  {
    this.toyService.deleteEventByUser(p.id).subscribe(result => console.log(result));
    location.reload();
  }

  getWish(id: number)
  {
    this.wish.clear();
    this.toyService.getWish(id).subscribe(result => result.forEach(w => this.wish.add(w)));
    if(this.wish.size == 0)
    {
      this.userWish = false
    }
  }

  getToysByUser(id: number)
  {
    this.userToys.clear();
    this.toyService.getToysByUser(id).subscribe(result => result.forEach(t => this.userToys.add(t)));
    if(this.userToys.size == 0)
    {
      this.toysByUser = false
    }
  }

  deleteUserToy(toy: Toy)
  {
    this.toyService.deleteToyByUser(toy.id).subscribe(result =>console.log(result));
    location.reload();
  }



}
