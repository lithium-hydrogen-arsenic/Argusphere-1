package com.Argus.Argusphere.model;

import jakarta.persistence.*;

@Entity
public class Empdet {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empdet_id;

    private Long empl_id;

    public Long getEmpdet_id() {
        return empdet_id;
    }

    public void setEmpdet_id(Long empdet_id) {
        this.empdet_id = empdet_id;
    }

    public Long getEmpl_id() {
        return empl_id;
    }

    public void setEmpl_id(Long empl_id) {
        this.empl_id = empl_id;
    }

    public Long getJoining() {
        return joining;
    }

    public void setJoining(Long joining) {
        this.joining = joining;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhone_no() {
        return phone_no;
    }

    public void setPhone_no(String phone_no) {
        this.phone_no = phone_no;
    }

    public String getSeating() {
        return seating;
    }

    public void setSeating(String seating) {
        this.seating = seating;
    }

    private Long joining;
    private String gender;
    private String phone_no;
    private String seating;

}
