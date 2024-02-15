import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evtcalendar } from '../models/eventcalendar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient) { }

  getEvents(): Observable<Evtcalendar[]> {
    let url = 'http://localhost:3000/calendar'; 
    return this.http.get<Evtcalendar[]>(url);
  }

  postEvent(evt: {
    organizer: string;
    startDate:string;
    endDate:string;
    evtName:string;
    evtType:string;
    evtLocation:string;
    description:string;
  }){
    this.http
    .post<Evtcalendar>('http://localhost:3000/calendar', evt)
    .subscribe((res) => {
      console.log(res);
    });
  }



}
