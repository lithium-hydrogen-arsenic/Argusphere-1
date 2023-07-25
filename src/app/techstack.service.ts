import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechstackService {
private apiServerUrl='http://localhost:8080';

  constructor(private http: HttpClient) { }

  public gettechstack(): Observable<any>{
      return this.http.get<any>(`${this.apiServerUrl}/techstack/alltechstack`);
  }

  public updateEmployees(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
}
}
