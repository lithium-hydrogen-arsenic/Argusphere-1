package com.Argus.Argusphere.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Employee implements Serializable {
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getVerify() {
        return verify;
    }

    public void setVerify(int verify) {
        this.verify = verify;
    }

    @Id
    @Column(nullable = false, updatable = false)
@GeneratedValue(strategy = GenerationType.IDENTITY)
       private Long id;

    public String getEmpl_id() {
        return empl_id;
    }

    public void setEmpl_id(String empl_id) {
        this.empl_id = empl_id;
    }

    private String empl_id;
    private String name;
    private String email;
    private String password;
    private int verify;

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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    private String role;
}
