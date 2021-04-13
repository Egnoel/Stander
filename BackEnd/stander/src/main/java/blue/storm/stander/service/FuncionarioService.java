package blue.storm.stander.service;


import blue.storm.stander.entity.Funcionario;
import blue.storm.stander.entity.User;
import blue.storm.stander.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {
    @Autowired
    FuncionarioRepository funcionarioRepository;

    public void saveFuncionario(User user){
        Funcionario c = new Funcionario();
        c.setUser(user);
        funcionarioRepository.save(c);
    }

    public List<Funcionario> showAll(){
        return funcionarioRepository.findAll();
    }

    public ResponseEntity<Funcionario> show(Long id){
        return funcionarioRepository.findById(id)
                .map(record->
                        ResponseEntity.ok().body(record)
                ).orElse(ResponseEntity.notFound().build());
    }
}
