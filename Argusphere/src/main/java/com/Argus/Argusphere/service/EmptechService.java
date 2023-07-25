package com.Argus.Argusphere.service;
import com.Argus.Argusphere.model.Emptech;
import com.Argus.Argusphere.repo.EmptechRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmptechService {
    private final EmptechRepo emptechRepo;

    @Autowired
    public EmptechService(EmptechRepo emptechRepo) {
        this.emptechRepo = emptechRepo;
    }

    public Emptech addtech(Emptech emptech){
        return emptechRepo.save(emptech);
    }
    public List<Emptech> findAllEmptech(){
        return emptechRepo.findAll();
    }
    public Emptech updateEmptech(Emptech emptech){
        return emptechRepo.save(emptech);
    }
    public void deleteEmptech(Long id){
        emptechRepo.deleteById(id);
    }

}
