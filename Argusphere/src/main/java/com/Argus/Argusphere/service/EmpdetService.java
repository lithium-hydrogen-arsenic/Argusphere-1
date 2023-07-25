package com.Argus.Argusphere.service;

import com.Argus.Argusphere.model.Empdet;
import com.Argus.Argusphere.repo.EmpdetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpdetService{
    private final EmpdetRepo empdetRepo;

    @Autowired
    public EmpdetService(EmpdetRepo empdetRepo) {
        this.empdetRepo = empdetRepo;
    }


    public Empdet addEmpdet(Empdet empdet){
        return empdetRepo.save(empdet);
    }
    public List<Empdet> findAllEmpdet(){
        return empdetRepo.findAll();
    }
    public Empdet updateEmpdet(Empdet empdet){
        return empdetRepo.save(empdet);
    }


}
