package com.grokonez.jwtauthentication.security.services;

import com.grokonez.jwtauthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public ResponseEntity findByUserName(String username){
        return userRepository.findByUsername(username)
                .map(record->ResponseEntity.ok().body(record)).orElse(ResponseEntity.notFound().build());
    }
}
