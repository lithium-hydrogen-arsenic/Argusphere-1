import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmptechService {
private apiServerUrl='http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getEmptech(): Observable<any>{
      return this.http.get<any>(`${this.apiServerUrl}/emptech/alltech`);
  }

  public updateEmployees(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
}
}
