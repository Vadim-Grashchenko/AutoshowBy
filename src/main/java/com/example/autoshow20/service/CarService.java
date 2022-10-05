package com.example.autoshow20.service;

import com.example.autoshow20.entity.Car;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public interface CarService {
    List<Car> getAll();
    Car getById(int id);
    void deleteCar(int id);
    Car save(Car car);
    void update(int id, Car car);
    List<Car> search(String Brand);
}
