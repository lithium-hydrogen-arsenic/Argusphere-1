package com.Argus.Argusphere.Controller;
import com.Argus.Argusphere.model.Emptech;
import com.Argus.Argusphere.service.EmptechService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/emptech")
public class EmptechController {
    private final EmptechService emptechService;

    public EmptechController(EmptechService emptechService) {
        this.emptechService = emptechService;
    }

    @CrossOrigin
    @GetMapping("/alltech")
    public ResponseEntity<List<Emptech>> getAllEmptech(){
        List<Emptech> emptech = emptechService.findAllEmptech();
        return new ResponseEntity<>(emptech, HttpStatus.OK);
    }

}
