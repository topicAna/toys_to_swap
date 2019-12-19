import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { toysService } from '../shared/toysService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    username: [''],
    password: ['']
  })

  constructor(private fb: FormBuilder, private toyService:toysService, private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.toyService.getUser(this.loginForm.value.username)
    .subscribe(response => {
      console.log(response)
      this.toyService.profile = !this.toyService.profile
      this.toyService.login = !this.toyService.login
      this.router.navigateByUrl('/event')
    })
  }
}
