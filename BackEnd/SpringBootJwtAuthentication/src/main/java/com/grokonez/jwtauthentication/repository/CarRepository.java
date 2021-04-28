package com.grokonez.jwtauthentication.repository;

import com.grokonez.jwtauthentication.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}
