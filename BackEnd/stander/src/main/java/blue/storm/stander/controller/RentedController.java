package blue.storm.stander.controller;

import blue.storm.stander.entity.Car;
import blue.storm.stander.entity.Rented;
import blue.storm.stander.entity.User;
import blue.storm.stander.service.RentedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "api/cars")
public class RentedController {
    @Autowired
    RentedService rentedService;

    @PostMapping("/aluguel/{userId}/{carId}")
    public void alugarCarro(@RequestBody Rented rented, @PathVariable Long userId, @PathVariable Long carId) {
        rented.setUser(new User(userId, "", "", "", "", true,""));
        rented.setCar(new Car(carId, "", "","Rented"));
         rentedService.save(rented, userId, carId);
    }

    @GetMapping("/alugados")
    public List show() {
        return rentedService.showAll();
    }

    @DeleteMapping("/devolvidos/{id}")
    public ResponseEntity deletar(@PathVariable Long id) {
        return rentedService.delete(id);
    }
    @DeleteMapping("/devolvidos")
    public void apagar(){
        rentedService.deleteAll();
    }
}
