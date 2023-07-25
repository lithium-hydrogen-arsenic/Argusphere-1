package com.Argus.Argusphere.Controller;
import com.Argus.Argusphere.model.Techstack;
import com.Argus.Argusphere.service.TechstackService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/techstack")
public class TechstackController {
    private final TechstackService techstackService;

    public TechstackController(TechstackService techstackService) {
        this.techstackService = techstackService;
    }

    @CrossOrigin
    @GetMapping("/alltechstack")
    public ResponseEntity<List<Techstack>> getAlltechstack(){
        List<Techstack> techstacks = techstackService.findAlltechstack();
        return new ResponseEntity<>(techstacks, HttpStatus.OK);
    }
}
