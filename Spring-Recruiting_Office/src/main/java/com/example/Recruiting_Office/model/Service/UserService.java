package com.example.Recruiting_Office.model.Service;

import com.example.Recruiting_Office.model.Entities.User;
import com.example.Recruiting_Office.model.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

        private UserRepository userRepository;
        @Autowired
        public UserService(UserRepository userRepository) {
            this.userRepository = userRepository;
        }

        public Optional<User> getUser(Integer userId) {
            return userRepository.findById(userId);

        }

        public List<User> getUsers() {
            return userRepository.findAll();
        }
        public void addNewUser(User user) {
            userRepository.save(user);
        }
        public void deleteUser(Integer userId) {
            userRepository.deleteById(userId);

        }

}
