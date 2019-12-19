import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { 

  }
  getEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/events`);
  }
}
