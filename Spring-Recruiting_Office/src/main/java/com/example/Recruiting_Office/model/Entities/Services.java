package com.example.Recruiting_Office.model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table
public class Services {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    private String category;
    private String description;
    private String img;
    private String link;
    @ManyToOne
    @JoinColumn(name = "user_ID" ,referencedColumnName = "id")
    private User user;
/////////////
@ManyToOne
@JoinColumn(name = "Contractorid" ,referencedColumnName = "id")
private Contractor contractor;

    @OneToOne(mappedBy = "services")
    @JsonIgnore
    private Feedback feedback;

    public Services(int id, String category, String description, String img, String link, User user, Contractor contractor, Feedback feedback) {
        this.id = id;
        this.category = category;
        this.description = description;
        this.img = img;
        this.link = link;
        this.user = user;
        this.contractor = contractor;
        this.feedback = feedback;
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

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Contractor getContractor() {
        return contractor;
    }

    public void setContractor(Contractor contractor) {
        this.contractor = contractor;
    }

    public Feedback getFeedback() {
        return feedback;
    }

    public void setFeedback(Feedback feedback) {
        this.feedback = feedback;
    }
}
