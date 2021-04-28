package com.grokonez.jwtauthentication.controller;

import com.grokonez.jwtauthentication.model.Car;
import com.grokonez.jwtauthentication.security.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/cars")
public class CarController {
    @Autowired
    CarService carService;

    @PostMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity addCar(@RequestBody Car car, @PathVariable Long id){
        return carService.addCar(car, id);
    }
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity updateCar(@RequestBody Car car,@PathVariable Long id){
        return carService.updateCar(id, car);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Car> show(){
        return carService.showAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity showById(@PathVariable Long id){
        return carService.showById(id);
    }
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity deleteCar(@PathVariable Long id){
        return carService.deleteCar(id);
    }
}
