package com.Argus.Argusphere.model;

import jakarta.persistence.*;

@Entity
public class Emptech {


    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long emptech_id;

    public Long getEmptech_id() {
        return emptech_id;
    }

    public void setEmptech_id(Long emptech_id) {
        this.emptech_id = emptech_id;
    }

    public Long getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(Long emp_id) {
        this.emp_id = emp_id;
    }

    public Long getTs_id() {
        return ts_id;
    }

    public void setTs_id(Long ts_id) {
        this.ts_id = ts_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getEndorse() {
        return endorse;
    }

    public void setEndorse(Long endorse) {
        this.endorse = endorse;
    }

    private Long emp_id;
    private Long ts_id;
    private String status;
    private Long endorse;
}
