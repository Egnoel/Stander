package blue.storm.stander.repository;

import blue.storm.stander.entity.Rented;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RentedRepository extends JpaRepository<Rented, Long> {
}