import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Emptech } from '../emptech';
import { Techstack } from '../techstack';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EmptechService } from '../emptech.service';
import { TechstackService } from '../techstack.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  index: number;
  updateIndex(id: number) {
    this.index = id;
  }
  employee: Employee[]=[];

  onSubmit(): void {
   
    console.log('Form submitted! Employee details:', this.employee);
  
  }

  isOne(emp_id: any) {
    if (emp_id == 1) {
      return true;
    } else {
      return false;
    }
  }
  isEqual(var1: any, var2: any) {
    if (var1==var2) {
      return true;
    } else {
      return false;
    }
  }
employee2:Employee;
public male="Male";
public female="Female";
public na="N/A";
  public emptech: Emptech[]=[];
  public employees: Employee[] = [];
public techstack: Techstack[]=[];

constructor(private employeeService: EmployeeService, private emptechService: EmptechService, private techstackService: TechstackService) {}

  ngOnInit(): void {
    this.getEmployees();
    this.getEmptech();
    this.getTechstack(); 
  }

  updateEmployee(id: number, empl_id: string, joining: number, seating: string, gender: string, role: string, phone_no: string) {
    this.employeeService.updateEmployee(id,empl_id, joining, seating, gender, role, phone_no).subscribe(
      (response) => {
        console.log('Employee entry added successfully:', response);
   
        // Perform any other actions after successful addition
      },
      (error) => {
        console.error('Error adding endorse entry:', error);
        console.log(error);
        // Handle error if necessary console.log(newEndorse);
      }
    );
    var button = document.getElementById('close-button');
    button.click();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (reponse: Employee[]) => {
        this.employees = reponse;
        console.log(this.employees);
        
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  getTechstack(): void{
    this.techstackService.gettechstack().subscribe({
      next: (reponse: Techstack[]) => {
        this.techstack = reponse;
        console.log(this.emptech);
        
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  getEmptech(): void {
    this.emptechService.getEmptech().subscribe({
      next: (reponse: Emptech[]) => {
        this.emptech = reponse;
        console.log(this.emptech);
        
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}



