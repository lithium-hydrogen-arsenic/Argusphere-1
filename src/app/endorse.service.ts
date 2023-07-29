import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Endorse } from './endorse';

@Injectable({
    providedIn: 'root'
  })
  export class EndorseService {
  private apiServerUrl='http://localhost:8080';
  
    constructor(private http: HttpClient) { }
  
    public getEndorse(): Observable<any>{
        return this.http.get<any>(`${this.apiServerUrl}/endorse/all`);
    }
    addEndorse(endorse: Endorse): Observable<Endorse> {
        return this.http.post<Endorse>(`${this.apiServerUrl}/endorse/add`, endorse);
      }

    public updateEmployees(): Observable<any>{
      return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
  }
  }