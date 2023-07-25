package com.Argus.Argusphere.model;

import jakarta.persistence.*;

@Entity
public class endorse {
    public Long getEndorse_id() {
        return endorse_id;
    }

    public void setEndorse_id(Long endorse_id) {
        this.endorse_id = endorse_id;
    }

    public Long getGiven_endorse_id() {
        return given_endorse_id;
    }

    public void setGiven_endorse_id(Long given_endorse_id) {
        this.given_endorse_id = given_endorse_id;
    }

    public Long getTaken_endorse_id() {
        return taken_endorse_id;
    }

    public void setTaken_endorse_id(Long taken_endorse_id) {
        this.taken_endorse_id = taken_endorse_id;
    }

    public Long getTs_id() {
        return ts_id;
    }

    public void setTs_id(Long ts_id) {
        this.ts_id = ts_id;
    }

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long endorse_id;

    private Long given_endorse_id;
    private Long taken_endorse_id;
    private Long ts_id;
}
