package blue.storm.stander.controller;

import blue.storm.stander.entity.Car;
import blue.storm.stander.entity.Cliente;
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
    Cliente cliente=new Cliente();
    Car car=new Car();
    @PostMapping("/aluguel/{clienteId}/{carId}")
    public void alugarCarro(@RequestBody Rented rented, @PathVariable Long clienteId, @PathVariable Long carId) {
        rented.setCliente(new Cliente(clienteId, cliente.getUser()));
        rented.setCar(new Car(carId, "", "", car.getFuncionario()));
         rentedService.save(rented, clienteId, carId);
    }

    @GetMapping("/alugados")
    public List show() {
        return rentedService.showAll();
    }

    @DeleteMapping("/devolvidos/{id}")
    public ResponseEntity deletar(@PathVariable Long id) {
        return rentedService.delete(id);
    }

  /*  @DeleteMapping("/devolvidos")
    public void apagar(){
        rentedService.deleteAll();
    }
    */

}
