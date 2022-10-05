package com.example.autoshow20.controller;

import com.example.autoshow20.entity.Car;
import com.example.autoshow20.repository.CarRepository;
import com.example.autoshow20.service.CarService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Slf4j
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
    public List<Car> search(@PathVariable("car_brand") String carBrand) {
        return carService.search(carBrand);
    }

    @DeleteMapping("/car/{id}")
    public void deleteCar(@PathVariable("id") int id) {
        carService.deleteCar(id);
    }

    @PostMapping("/save")
    public Car save(@RequestBody Car carNew) {
        log.error(carNew.toString());
        return carService.save(carNew);
    }

    @PostMapping("/{id}/update")
    public void update(@PathVariable("id") int id, @RequestBody Car car){
       carService.update(id, car);
    }
}
