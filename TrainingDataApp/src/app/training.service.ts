import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Training } from './training';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  url = 'http://localhost:49982/api/training';
  constructor(private http: HttpClient) { }
 

  
  createTraining(training: Training): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.url + '/save/', training, httpOptions);
  }

  

}
