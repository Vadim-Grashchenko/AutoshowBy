package com.example.autoshow20.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "car_brand")
    private String carBrand;
    @Column(name = "model")
    private String model;
    @Column(name = "year_release")
    private int yearRelease;
    @Column(name = "prise")
    private int prise;
    @Column(name = "image_car")
    private String imageCar;

    public Car(int id, String carBrand, String model, int yearRelease, int prise, String imageCar) {
        this.id = id;
        this.carBrand = carBrand;
        this.model = model;
        this.yearRelease = yearRelease;
        this.prise = prise;
        this.imageCar = imageCar;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Car car = (Car) o;
        return id == car.id && yearRelease == car.yearRelease && prise == car.prise && Objects.equals(carBrand, car.carBrand) && Objects.equals(model, car.model) && Objects.equals(imageCar, car.imageCar);
    }

    @Override
    public String toString() {
        return "brand:" + this.carBrand
                + "model:" + this.model;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, carBrand, model, yearRelease, prise, imageCar);
    }

}