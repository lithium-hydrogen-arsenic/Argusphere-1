package com.Argus.Argusphere.repo;
import com.Argus.Argusphere.model.Emptech;
import com.Argus.Argusphere.model.Techstack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmptechRepo extends JpaRepository<Emptech, Long> {
}

