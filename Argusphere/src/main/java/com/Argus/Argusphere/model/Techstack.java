package com.Argus.Argusphere.model;

import jakarta.persistence.*;

@Entity
public class Techstack {
    public Long getTech_id() {
        return tech_id;
    }

    public void setTech_id(Long tech_id) {
        this.tech_id = tech_id;
    }

    public String getTs_name() {
        return ts_name;
    }

    public void setTs_name(String ts_name) {
        this.ts_name = ts_name;
    }

    public String getTs_type() {
        return ts_type;
    }

    public void setTs_type(String ts_type) {
        this.ts_type = ts_type;
    }

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tech_id;

    private String ts_name;
    private String ts_type;
}
