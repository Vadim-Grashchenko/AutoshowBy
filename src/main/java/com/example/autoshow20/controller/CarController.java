package com.example.autoshow20.controller;

import com.example.autoshow20.entity.Car;
import com.example.autoshow20.repository.CarRepository;
import com.example.autoshow20.service.CarService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
@AllArgsConstructor
@RestController
public class CarController {

    private final CarService carService;

    @GetMapping("/cars")
    public List<Car> getAll() {
        return carService.getAll();
    }

    @GetMapping("/car/{id}")
    public Car getById(@PathVariable("id") int id) {
        return carService.getById(id);
    }

    @GetMapping("/cars/{car_brand}")
    public List<Car> getByBrand(@PathVariable("car_brand") String carBrand) {
        return carService.getByBrand(carBrand);
    }
}
