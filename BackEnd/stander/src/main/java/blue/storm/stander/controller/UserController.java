package blue.storm.stander.controller;

import blue.storm.stander.entity.User;
import blue.storm.stander.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/signUp")
    public void registo(@RequestBody User user){
        userService.registarUser(user);
    }

    @GetMapping("/login/{email}/{senha}")
    public User login(@PathVariable String email,@PathVariable String senha){
        return userService.login(email, senha);
    }

}
