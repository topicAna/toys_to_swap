import { Component, OnInit } from '@angular/core';
import { toysService } from 'src/app/shared/toysService';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: User;
  
  constructor(private toyService : toysService) { }

  ngOnInit() {
    this.toyService.getUser('mayolle').subscribe(response => {
      this.user = response;
     console.log(this.user)
    });

  }

  

}
