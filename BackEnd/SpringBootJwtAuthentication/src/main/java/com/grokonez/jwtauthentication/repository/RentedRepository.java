package com.grokonez.jwtauthentication.repository;

import com.grokonez.jwtauthentication.model.Rented;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RentedRepository extends JpaRepository<Rented, Long> {
    Optional<Rented> findByUser_Id(Long id);
    Optional<Rented> findByCar_Id(Long id);
}
