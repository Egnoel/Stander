package blue.storm.stander.service;

import blue.storm.stander.entity.Cliente;
import blue.storm.stander.entity.User;
import blue.storm.stander.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;



    public void criarCliente(User user){
        Cliente c = new Cliente();
       c.setUser(user);
        clienteRepository.save(c);
    }

    public List<Cliente> mostrar(){
        return clienteRepository.findAll();
    }

    public ResponseEntity<Cliente> showById(Long id){
        return clienteRepository.findById(id)
                .map(record ->
                   ResponseEntity.ok().body(record)
                ).orElse(ResponseEntity.notFound().build());
    }
}

