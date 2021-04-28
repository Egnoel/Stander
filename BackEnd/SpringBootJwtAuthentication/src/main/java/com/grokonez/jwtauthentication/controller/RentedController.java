package com.grokonez.jwtauthentication.controller;

import com.grokonez.jwtauthentication.model.Car;
import com.grokonez.jwtauthentication.model.Rented;
import com.grokonez.jwtauthentication.model.User;
import com.grokonez.jwtauthentication.security.services.RentedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "api/cars")
public class RentedController {
    @Autowired
    RentedService rentedService;

    @PostMapping("/rent/{clientId}/{carId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity rent(@PathVariable Long clientId, @PathVariable Long carId){
        return rentedService.rent(clientId,carId);
    }

    @PostMapping("/rent")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity alugar(@RequestBody Rented rented){
        return rentedService.alugar(rented);
    }

    @GetMapping("/rented")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Rented> show(){
        return rentedService.showAll();
    }

    @GetMapping("/rented/{id}")
    public ResponseEntity showById(@PathVariable Long id){
        return rentedService.showById(id);
    }

    @DeleteMapping("/rented/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity giveBack(@PathVariable Long id){
        return rentedService.giveBack(id);
    }
}
