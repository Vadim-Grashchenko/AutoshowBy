import React from "react";

import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


const Brand = () => {
    const {carBrand} = useParams();
    const [cars, setBrand] = useState(null);
    
    useEffect(() => {
        fetch(`http://localhost:8080/cars/${carBrand}`)
        .then(res => res.json())
        .then(data => setBrand(data))
    }, [carBrand]);


    return (
        <div>
            <h1>AutoShow.by</h1>
            <hr></hr>
            
            <div class="cars">
            {
                        this.state.cars.map(
                            car =>
                        <div class="search" key = {car.id}>
                            <>
                            <div class="car-info">
                                <h4>{car.carBrand} {car.model}</h4>
                                <p>Год выпуска: {car.yearRelease}</p>
                                <p>{car.prise}$</p>
                            </div>
                            <div class="car-img">
                                <p><img src ={car.imageCar}></img></p>
                            </div>
                            </>
                        </div>
                        )
                    }
                    
            </div>
        </div>
        
    )
}
export default Brand;