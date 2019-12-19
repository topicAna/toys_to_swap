import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Charity } from './charity';

@Injectable({
  providedIn: 'root'
})
export class toysService {


    charities: Set<Charity> = new Set<Charity>();
    toysURL = "http://localhost:3000"
  

  constructor(private http: HttpClient) { }

  getAllCharities() {
    this.http.get<Set<Charity>>(`${this.toysURL}/charity`)
    .subscribe(result => {
      this.charities.clear();
      result.forEach(t => this.charities.add(t));
    })
    return this.charities;
  }

  getUser(username: string){
    return this.http.get<any>(`${this.toysURL}/user/getUser/${username}`);
  }

}
