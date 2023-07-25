package com.Argus.Argusphere.repo;

import com.Argus.Argusphere.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee, Long>{

}