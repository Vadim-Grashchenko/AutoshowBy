package com.example.autoshow20.service;

import com.example.autoshow20.entity.Car;
import com.example.autoshow20.repository.CarRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class CarSeviceImpl implements CarService{
    private final CarRepository carRepository;
    
    @Override
    public List<Car> getAll() {
        return carRepository.findAll().stream()
                .map(car -> new Car(car.getId(),car.getCarBrand(), car.getModel(), car.getYearRelease(), car.getPrise(),
                        car.getImageCar())).collect(Collectors.toList());
    }
    
    @Override
    public Car getById(int id) {
        Car car = carRepository.findById(id).get();
        return car;
    }
    
    @Override
    public List<Car> search(String carBrand) {

        List<Car> car = carRepository.findAll();
        List<Car> brand = new ArrayList<>();

        for (int i = 0; i < car.size(); i++) {
            if (car.get(i).getCarBrand().equals(carBrand))
                brand.add(car.get(i));
        }

        return brand;
    }

    @Override
    public void deleteCar(int id) {
        Car car = carRepository.findById(id).get();
        carRepository.delete(car);
    }

    @Override
    public Car save(Car carNew) {
        return carRepository.saveAndFlush(carNew);
    }

    @Override
    public void update(int id, Car updateCar) {
        Car car = carRepository.findById(id).get();
        car.setPrise(updateCar.getPrise());
        carRepository.saveAndFlush(car);
    }
}
