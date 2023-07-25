package com.Argus.Argusphere.Controller;

import com.Argus.Argusphere.model.Empdet;
import com.Argus.Argusphere.model.Employee;
import com.Argus.Argusphere.service.EmpdetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/empdet")
public class EmpdetController {

    private final EmpdetService empdetService;

    public EmpdetController(EmpdetService empdetService) {
        this.empdetService = empdetService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Empdet>> getAllEmpdet(){
        List<Empdet> empdet = empdetService.findAllEmpdet();
        return  new ResponseEntity<>(empdet, HttpStatus.OK);
    }

}
