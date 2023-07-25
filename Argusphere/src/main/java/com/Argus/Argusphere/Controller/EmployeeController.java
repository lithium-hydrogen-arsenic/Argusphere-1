package com.Argus.Argusphere.Controller;

import com.Argus.Argusphere.model.Employee;
import com.Argus.Argusphere.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> employee = employeeService.findAllEmployees();
        return  new ResponseEntity<>(employee, HttpStatus.OK);
    }

//    @GetMapping("/find/{id}")
//    public ResponseEntity<Employee> getEmployeeByID(@PathVariable("id") Long id){
//        Employee employee = employeeService.findEmployeeByID(id);
//        return  new ResponseEntity<>(employee, HttpStatus.OK);
//    }


    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
        Employee new_employee = employeeService.addEmployee(employee);
        return  new ResponseEntity<>(new_employee, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
        Employee update_employee = employeeService.updateEmployee(employee);
        return  new ResponseEntity<>(update_employee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable("id") Long id){
    employeeService.deleteEmployee(id);
        return  new ResponseEntity<>(HttpStatus.OK);
    }

}
