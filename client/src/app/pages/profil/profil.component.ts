import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { toysService } from 'src/app/shared/toysService';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  users: Set<User> = new Set<User>();
  user: User;
  constructor(private toyService: toysService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser()
  {
    return this.toyService.getUser('mayolle').subscribe(result => this.users.add(result));
  }

}
