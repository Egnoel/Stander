package com.grokonez.jwtauthentication.security.services;

import com.grokonez.jwtauthentication.model.Car;
import com.grokonez.jwtauthentication.repository.CarRepository;
import com.grokonez.jwtauthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class CarService {
    @Autowired
    CarRepository carRepository;
    @Autowired
    UserRepository userRepository;

    Set<Car> cars = new HashSet<>();

    public ResponseEntity addCar(Car car, Long id){
        return userRepository.findById(id)
                .map(record->{
                    cars.add(car);
                    record.setCars(cars);
                    carRepository.save(car);
                    return ResponseEntity.ok().body(car);
                }).orElse(ResponseEntity.notFound().build());
    }

    public List<Car> showAll(){
        return carRepository.findAll();
    }

    public ResponseEntity showById(Long id){
        return carRepository.findById(id)
                .map(record->ResponseEntity.ok().body(record)).orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity updateCar(Long id, Car car){
        return carRepository.findById(id)
                .map(record->{
                    record.setModel(car.getModel());
                    record.setColor(car.getColor());
                    Car update = carRepository.save(record);
                    return ResponseEntity.ok().body(update);
                }).orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity deleteCar(Long id){
        return carRepository.findById(id)
                .map(record->{

                    carRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
