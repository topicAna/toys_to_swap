import { Component, OnInit } from '@angular/core';
import { toysService } from 'src/app/shared/toysService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  profile: boolean;
  login: boolean;

  constructor(private toyService: toysService) { }

  ngOnInit() {
    this.profile = this.toyService.profile;
    this.login = this.toyService.login;
  }

}
