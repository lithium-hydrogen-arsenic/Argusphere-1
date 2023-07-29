import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployee(empl_id: number) {
    throw new Error('Method not implemented.');
  }
private apiServerUrl='http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<any>{
      return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
  }


  public updateEmployee(
    id: number,
    empl_id: string,
    joining: number,
    seating: string,
    gender: string,
    role: string,
    phone_no: string
  ): Observable<any> {
    return this.http.put<any>(
      `${this.apiServerUrl}/employee/update/${id}`,
      {
        "empl_id": empl_id,
        "joining": joining,
        "seating": seating,
        "gender": gender,
        "role": role,
        "phone_no": phone_no
      }
    );
  }

addEmployee(employee: Employee): Observable<Employee> {
  return this.http.post<Employee>(`${this.apiServerUrl}/employee`, employee);
}
}
