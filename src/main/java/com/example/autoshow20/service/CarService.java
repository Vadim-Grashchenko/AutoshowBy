package com.example.autoshow20.service;

import com.example.autoshow20.entity.Car;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public interface CarService {
    public List<Car> getAll();
    public Car getById(int id);
    public List<Car> getByBrand(String carBrand);
}
