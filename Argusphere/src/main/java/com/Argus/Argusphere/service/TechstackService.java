package com.Argus.Argusphere.service;

import com.Argus.Argusphere.model.Emptech;
import com.Argus.Argusphere.model.Techstack;
import com.Argus.Argusphere.repo.TechstackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TechstackService {
    private final TechstackRepo techstackRepo;

    @Autowired
    public TechstackService(TechstackRepo techstackRepo) {
        this.techstackRepo = techstackRepo;
    }

    public List<Techstack> findAlltechstack(){
        return techstackRepo.findAll();
    }

    public Optional<Techstack> findByID(Long tech_id){
        return techstackRepo.findById(tech_id);
    }
}
