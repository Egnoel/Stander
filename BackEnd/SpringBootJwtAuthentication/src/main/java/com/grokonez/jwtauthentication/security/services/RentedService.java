package com.grokonez.jwtauthentication.security.services;

import com.grokonez.jwtauthentication.model.Car;
import com.grokonez.jwtauthentication.model.Rented;
import com.grokonez.jwtauthentication.model.User;
import com.grokonez.jwtauthentication.repository.CarRepository;
import com.grokonez.jwtauthentication.repository.RentedRepository;
import com.grokonez.jwtauthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RentedService {
    @Autowired
    RentedRepository rentedRepository;
    @Autowired
    UserRepository userRepository;

    @Autowired
    CarRepository carRepository;
    Rented rented = new Rented();
    Rented rent = new Rented();

    public ResponseEntity rent(Long clientId, Long carId){
        if(!rentedRepository.findByUser_Id(clientId).isPresent() & !rentedRepository.findByCar_Id(carId).isPresent()){
            rent=  rentedRepository.save(getEntities(clientId,carId));
        }
        return ResponseEntity.ok().body(rent);

    }

    public Rented getEntities(Long clientId, Long carId){
        userRepository.findById(clientId)
                .map(record->{rented.setUser(record);
                    return ResponseEntity.ok();
                });
        carRepository.findById(carId)
                .map(data->{rented.setCar(data);
                    return ResponseEntity.ok();
                });
        return rented;
    }

    public ResponseEntity alugar(Rented rented){

        if(!rentedRepository.findByCar_Id(rented.getCar().getId()).isPresent() & !rentedRepository.findByUser_Id(rented.getUser().getId()).isPresent()){
            rent=  rentedRepository.save(getEntities(rented.getUser().getId(),rented.getCar().getId()));
        }
        return ResponseEntity.ok().body(rent);
    }

    public List<Rented> showAll(){
        return rentedRepository.findAll();
    }

    public ResponseEntity showById(Long id){
        return rentedRepository.findById(id)
                .map(record->ResponseEntity.ok().body(record)).orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity giveBack(Long id){
        return rentedRepository.findById(id)
                .map(record->{
                    rentedRepository.delete(record);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }


}
