package com.example.Recruiting_Office.model.Repository;

import com.example.Recruiting_Office.model.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User,Integer> {

}
