import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incomestatement } from '../models/instmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomefetchService {
  constructor(private http:HttpClient) { }

  getStatement(): Observable<Incomestatement[]> {
    let url = 'http://localhost:3000/prls'; 
    return this.http.get<any[]>(url);
  }

  // postStatement(){
  //   let url = 'http://localhost:3000/prls'; 
  //    return this.http.post(url)
  // }

 
}
