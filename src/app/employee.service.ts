import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private apiServerUrl='http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<any>{
      return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
  }

  public updateEmployees(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
}
}
