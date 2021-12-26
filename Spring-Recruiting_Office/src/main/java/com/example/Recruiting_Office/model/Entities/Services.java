package com.example.Recruiting_Office.model.Entities;

import javax.persistence.*;

@Entity
@Table
public class Services {
    @Id
    private int id ;
    private String category;
    private String description;
    @ManyToOne
    @JoinColumn(name = "user_ID" ,referencedColumnName = "id")
    private User user;
@OneToOne(mappedBy = "services")
private Feedback feedback;

    public Services(int id, String category, String description) {
        this.id = id;
        this.category = category;
        this.description = description;
    }

    public Services() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Services{" +
                "id=" + id +
                ", category='" + category + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
