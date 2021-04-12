package blue.storm.stander.controller;


import blue.storm.stander.entity.Car;
import blue.storm.stander.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/cars")
public class CarController {
    @Autowired
    private CarService carService;

    @PostMapping("/add")
    public void registar(@RequestBody Car car) {
        carService.AddCar(car);
    }

    @GetMapping
    public List mostrar() {
        return carService.showCar();
    }

    @GetMapping("/{id}")
    public ResponseEntity getCar(@PathVariable Long id){
        return carService.getCarById(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity atualizar(@PathVariable Long id, @RequestBody Car car) {
        return carService.updateCar(id, car);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCar(@PathVariable Long id) {
        return carService.deleteCar(id);
    }



}
