package blue.storm.stander.controller;

import blue.storm.stander.entity.Funcionario;
import blue.storm.stander.entity.User;
import blue.storm.stander.repository.FuncionarioRepository;
import blue.storm.stander.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/funcionario")
public class FuncionarioController {
    @Autowired
    FuncionarioService funcionarioService;

    @GetMapping
    public List<Funcionario> mostrar(){
        return funcionarioService.showAll();
    }

    @PostMapping("/add")
    public void criar(@RequestBody User user){
         funcionarioService.saveFuncionario(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Funcionario> showById(@PathVariable Long id){
        return funcionarioService.show(id);
    }
}
