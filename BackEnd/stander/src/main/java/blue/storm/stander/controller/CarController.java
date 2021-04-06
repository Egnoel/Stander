package blue.storm.stander.controller;


import blue.storm.stander.entity.Car;
import blue.storm.stander.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarController {
    @Autowired
    private CarService carService;

    @PostMapping("/registo")
    public void registar(@RequestBody Car car){
        carService.AddCar(car);
    }

    @GetMapping("/show")
    public List mostrar(){
        return carService.showCar();
    }

    @PutMapping("/atualizar/{id}")
    public ResponseEntity atualizar(@PathVariable Long id, @RequestBody Car car){
        return carService.updateCar(id, car);
    }

    @DeleteMapping("apagar/{id}")
    public ResponseEntity deleteCar(@PathVariable Long id){
        return carService.deleteCar(id);
    }

}
