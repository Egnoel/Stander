package blue.storm.stander.service;

import blue.storm.stander.entity.Rented;
import blue.storm.stander.repository.RentedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RentedService {

    @Autowired
    RentedRepository rentedRepository;

    public Rented save(Rented rented) {
       return rentedRepository.save(rented);
    }

    public ResponseEntity delete(Long id){
        return rentedRepository.findById(id)
                .map(record ->{
                    rentedRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }

    public List<Rented> showAll(){
        return rentedRepository.findAll();
    }
}
