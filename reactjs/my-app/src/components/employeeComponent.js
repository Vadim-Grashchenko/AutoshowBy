import React from "react";
import employeeServices from "../services/employeeServices";
import {Link, useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';



class EmployeeComponent extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                employees:[]
            }
        }

        componentDidMount() {
            employeeServices.getEmployees().then((response) => {
                this.setState({employees: response.data})
            });
        }

        render(){

            return (
                <div>

                    {/* {
                        this.state.cars.map(
                            car =>
                        <div class="search" key = {car.id}>
                            <h6><Link to={`cars/${car.carBrand}`}>{car.carBrand}</Link></h6>
                        </div>
                        )
                    } */}
                    
                    <div class="cars">
                    {
                                this.state.employees.map(
                                    employee =>
                                    <div class="car" key = {employee.id}>
                                        <div class="car-img">
                                            <p><img src ={employee.employee_image}></img></p>
                                        </div>
                                        <div class="car-info-all">
                                            <div class="car-info">
                                                <h4>{employee.name} {employee.surname}</h4>
                                                <p>Должность: {employee.post}</p>
                                            </div>
                                            {/* <div class="prise-car">
                                                <h4>{car.prise}$</h4>
                                            </div> */}
                                        </div>
                                    </div>
                                )
                            }
                    </div>
                </div>
                
            )
        }
}

export default EmployeeComponent