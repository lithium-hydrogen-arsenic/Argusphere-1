package com.Argus.Argusphere.service;

import com.Argus.Argusphere.model.Employee;
import com.Argus.Argusphere.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee){
        return employeeRepo.save(employee);
    }
    public List<Employee> findAllEmployees(){
        return employeeRepo.findAll();
    }


//    public Employee findEmployeeByID(Long id){
//        return employeeRepo.findById(id).orElseThrow(()-> new UsernameNotFoundException("User NOT FOUND"));
//    }

    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }
    public void deleteEmployee(Long id){
        employeeRepo.deleteById(id);
    }
}
