package blue.storm.stander.service;

import blue.storm.stander.entity.Car;
import blue.storm.stander.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository;

    public void AddCar(Car car){
        carRepository.save(car);
    }

    public List<Car> showCar(){
        return carRepository.findAll();
    }

    public ResponseEntity updateCar(Long id, Car car){
      return  carRepository.findById(id)
                .map(record ->{
                    record.setColor(car.getColor());
                    record.setModel(car.getModel());
                    Car update = carRepository.save(record);
                    return ResponseEntity.ok().body(update);
        }).orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity deleteCar(Long id){
        return carRepository.findById(id)
                .map(record ->{
                    carRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }

}
