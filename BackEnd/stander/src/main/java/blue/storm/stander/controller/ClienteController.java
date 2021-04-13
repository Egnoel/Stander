package blue.storm.stander.controller;

import blue.storm.stander.entity.Cliente;
import blue.storm.stander.entity.User;
import blue.storm.stander.service.CarService;
import blue.storm.stander.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cliente")
public class ClienteController {

    @Autowired
    ClienteService clienteService;
    @PostMapping
    public void criarCliente(@RequestBody User user){

        clienteService.criarCliente(user);
    }

    @GetMapping
    public List showCliente(){
        return clienteService.mostrar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> show(@PathVariable Long id){
        return clienteService.showById(id);
    }

}
