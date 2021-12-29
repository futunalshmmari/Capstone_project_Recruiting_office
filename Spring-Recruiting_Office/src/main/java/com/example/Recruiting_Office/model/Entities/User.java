package com.example.Recruiting_Office.model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String city;
    private int phone;


    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Feedback> items = new ArrayList<>();
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Services> items1 = new ArrayList<>();

    public User(int id, String name, String email, String city, int phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.city = city;
        this.phone = phone;
    }

    public User() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public List<Feedback> getItems() {
        return items;
    }

    public void setItems(List<Feedback> items) {
        this.items = items;
    }

    public List<Services> getItems1() {
        return items1;
    }

    public void setItems1(List<Services> items1) {
        this.items1 = items1;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", city='" + city + '\'' +
                ", phone=" + phone +
                ", items=" + items +
                ", items1=" + items1 +
                '}';
    }
}