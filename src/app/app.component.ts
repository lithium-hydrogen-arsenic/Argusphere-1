import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emptech } from './emptech';
import { Employee } from './employee';
import { Techstack } from './techstack';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EmptechService } from './emptech.service';
import { TechstackService } from './techstack.service';
import { Endorse } from './endorse';
import { EndorseService } from './endorse.service';
import { HeaderComponent } from './header/header.component';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  [x: string]: any;
  index: number;
  selectedIDno: number;
  SelectedTech: number;
  allEmployees: Employee[];

  updateIndex(id: number) {
    this.index = id;
  }

  isOne(emp_id: any) {
    if (emp_id == 1) {
      return true;
    } else {
      return false;
    }
  }
  selectedID: number | null = null;

  onSelectChange(event: Event) {
    const selectedValue = parseInt(
      (event.target as HTMLSelectElement).value,
      10
    );
    console.log('Selected tech ID:', selectedValue);
    this.SelectedTech = selectedValue;
    // Rest of your code
  }

  updateEndorse() {}

  isEqual(var1: any, var2: any) {
    if (var1 == var2) {
      return true;
    } else {
      return false;
    }
  }

  //   selectedID(selected : any){
  //   console.log(selected);
  //   this.selectedIDno=selected;
  // }

  public check: any;
  public emptech: Emptech[] = [];
  public employees: Employee[] = [];
  public techstack: Techstack[] = [];
  endorse: Endorse[] = [];
  public check2 = 2;
  public given_endorse_id: any;
  public taken_endorse_id: any;
  public ts_id: any;
  public endorseSelected: number;

  constructor(

    private employeeService: EmployeeService,
    private emptechService: EmptechService,
    private techstackService: TechstackService,
    private endorseService: EndorseService,
    private sharedDataService: SharedDataService
    
  ) {}


  searchText:String;
  ngOnInit(): void {
    this.getEmployees();
    this.getEmptech();
    this.getTechstack();
    this.initCarousel();
    this.getEndorse();
    this.sharedDataService.searchQueryObservable.subscribe(
      (res) => {
        console.log(res);
        this.searchText=res;
        if(this.searchText.trim() === ''){
          this.employees = this.allEmployees;
        }
        else{
          this.employees = this.employees.filter((employee) => {
            return employee.name.toLowerCase().includes(this.searchText.toLowerCase())
            || employee.email.toLowerCase().includes(this.searchText.toLowerCase())
            || employee.empl_id.toString().toLowerCase().includes(this.searchText.toLowerCase())
            || employee.role.toLowerCase().includes(this.searchText.toLowerCase())
            ;
          });
        }
      }
    )
    
  }

  // private headerComponent:HeaderComponent
  // seachText:String=this.headerComponent.searchText
  // searchEmp = new HeaderComponent;
  
  addEndorse(
    given_endorse_id: number,
    employee_id: number,
    tech_id: number
  ): void {
    const newEndorse: Endorse = {
      given_endorse_id: given_endorse_id,
      taken_endorse_id: employee_id,
      ts_id: tech_id,
      // Add other properties as needed
    };

    this.endorseService.addEndorse(newEndorse).subscribe(
      (response) => {
        console.log('Endorse entry added successfully:', response);
        console.log(newEndorse);
        // Perform any other actions after successful addition
      },
      (error) => {
        console.error('Error adding endorse entry:', error);
        console.log(newEndorse);
        // Handle error if necessary console.log(newEndorse);
      }
    );
  }
  findEndorse(emp_id, ts_id) {
    for (let index = 0; index < this.emptech.length; index++) {
      const element = this.emptech[index];
      if (element.emp_id == emp_id && element.ts_id == ts_id) {
        this.endorseSelected = element.endorse;
      }
    }
    return this.endorseSelected;
  }

  addEmptechEndorse(emp_id: number, ts_id: number, endorse: number): void {
    this.emptechService.addEndorse(emp_id, ts_id, endorse).subscribe(
      (response) => {
        console.log('Endorse entry added successfully:', response);
        console.log(response);
        this.getEmployees();
        this.getEmptech();
        this.getTechstack();
        this.getEndorse();
        // Perform any other actions after successful addition
      },
      (error) => {
        console.error('Error adding endorse entry:', error);
        console.log(error);
        // Handle error if necessary console.log(newEndorse);
      }
    );
  }

  // addEndorse() {
  //   this.endorseService.addEndorse(this.endorse).subscribe(
  //     (response) => {
  //       console.log('Employee added successfully:', response);
  //       // Perform any other actions after successful addition
  //     },
  //     (error) => {
  //       console.error('Error adding employee:', error);
  //       // Handle error if necessary
  //     }
  //   );
  // }
  getEndorse() {
    this.endorseService.getEndorse().subscribe({
      next: (reponse: Endorse[]) => {
        this.endorse = reponse;
        console.log(this.endorse);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  getTechstack(): void {
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
        this.allEmployees = this.employees;
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
