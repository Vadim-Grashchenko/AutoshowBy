import React from "react";
import carServices from "../services/carServices";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Button } from "bootstrap";

 
const Car = () => {
    const {id} = useParams();
    const[car, setCar] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/car/${id}`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, [id]);

    return (
        <div>
            {car && (
                <>
                <div className="car-info">
                    <h4>{car.carBrand} {car.model}</h4>
                    <p>Год выпуска: {car.yearRelease}</p>
                    <p>{car.prise}$</p>
                </div>
                <div className="car-img">
                     <p><img src ={car.imageCar}></img></p>
                </div>
                
                </>
            )}
        </div>
    )
}

export default Car;