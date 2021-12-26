package com.example.Recruiting_Office.model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table
public class Feedback {
    @Id
    private int id ;
    private String subject;
    private String description;


    @ManyToOne
    @JoinColumn(name = "user_ID" ,referencedColumnName = "id")
    private User user;
@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name ="services_id" )
private Services services;

    public Feedback() {
    }

    public Feedback(int id, String subject, String description, User user) {
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Feedback{" +
                "id=" + id +
                ", subject='" + subject + '\'' +
                ", description='" + description + '\'' +
                ", user=" + user +
                '}';
    }
}