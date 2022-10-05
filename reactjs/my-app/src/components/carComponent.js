import React from "react";
import carServices from "../services/carServices";
import {Link, useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";



class CarComponent extends React.Component {
        
        constructor(props) {
            super(props)
            this.state = {
                cars:[]
            }
        }

        [searchParams, setSearchParams];
        carQuery = searchParams.get('car') || '';

        handleSubmit = (e) => {
          

            e.preventDefault();
            const form = e.target;
    
            const query = form.search.value;
    
            setSearchParams({car: query})
        }

        deleteCar = (id) => {
            axios.delete(`http://localhost:8080/car/${id}`)
            .then(response => {
                if (response.data != null) {
                    alert("Delete?");
                }
            })
        }

        componentDidMount() {
            carServices.getCars().then((response) => {
                this.setState({cars: response.data})
            });
        }

        render(){
            
            return (
                <div>
                    <br/>
                    {
                        this.state.cars.filter(
                            car => car.title.includes(carQuery)
                        ).map(
                            car =>
                        <div class="search" key = {car.id}>
                            <h6><Link to={`cars/${car.carBrand}`}>{car.carBrand}</Link></h6>
                        </div>
                        )
                    }
                    <br/>
                    <h4 id="add"><Link to={`save`}>Add Car</Link></h4>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <input type="search" name="search" />
                        <input type="submit" value="Search" />
                    </form>
                    <div class="cars">
                    {
                                this.state.cars.map(
                                    car =>
                                    <div class="car" key = {car.id}>
                                        <div class="car-img">
                                            <p><img src ={car.imageCar}></img></p>
                                        </div>
                                        <div class="car-info-all">
                                            <div class="car-info">
                                                <h4><Link to={`/car/${car.id}`}> {car.carBrand} {car.model}</Link></h4>
                                                <p>Год выпуска: {car.yearRelease}</p>
                                            </div>
                                            <div class="prise-car">
                                                <h4>{car.prise}$</h4>
                                            </div>
                                            <div className="delete-bt">
                                                <button id="delete" onClick={this.deleteCar.bind(this, car.id)}>Delete</button>
                                            </div>
                                            <div className="update-bt">
                                                {/* <Link to={`update/${car.id}`}><button id="update">Updating</button></Link> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                    </div>
                </div>
                
            )
        }
}

export default CarComponent