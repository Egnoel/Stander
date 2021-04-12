package blue.storm.stander.service;

import blue.storm.stander.entity.User;
import blue.storm.stander.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void registarUser(User user) {
        userRepository.save(user);
    }

    public User login(String email, String senha) {
        return userRepository.findByEmailAndSenha(email, senha);
    }


}
