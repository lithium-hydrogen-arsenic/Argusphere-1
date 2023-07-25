import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emptech } from './emptech';
import { Employee } from './employee';
import { Techstack } from './techstack';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EmptechService } from './emptech.service';
import { TechstackService } from './techstack.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  index : number;
  updateIndex(id : number){
    this.index = id;
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

  public check: any;
  public emptech: Emptech[]=[];
  public employees: Employee[] = [];
public techstack: Techstack[]=[];

  constructor(private employeeService: EmployeeService, private emptechService: EmptechService, private techstackService: TechstackService) {}

  ngOnInit(): void {
    this.getEmployees();
    this.getEmptech();
    this.getTechstack();
    this.initCarousel();
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
  initCarousel() {
    // Activate the first slide when the component is initialized
    document.querySelector('.carousel-item')?.classList.add('active');
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

  title = 'my-app';

  // constructor(private router:Router){}

  // goToPage(pageName:string):void {
  // this.router.navigate([`${pageName}`]);
  // }
}
