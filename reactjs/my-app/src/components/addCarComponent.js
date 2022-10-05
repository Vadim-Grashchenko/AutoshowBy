import React from "react";
import carServices from "../services/carServices";
import {Link, useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";

class AddCarComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            carBrand: '',
            model: '',
            yearRelease: '',
            imageCar: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

        axios.post('http://localhost:8080/save', this.state, {
            headers: {
              'Content-Type': 'application/json',
              'accept':'application/json'
            },
          })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {carBrand, model, yearRelease, imageCar} = this.state
        return(
            <>
            <br/>
            <form className="form-add" onSubmit={this.submitHandler}>
                <label>Brand</label><br/>
                <input type="text" name="carBrand" value={carBrand} onChange={this.changeHandler}/><br/>
                <label>Model</label><br/>
                <input type="text" name="model" value={model} onChange={this.changeHandler}/><br/>
                <label>Year Release</label><br/>
                <input type="text" name="yearRelease" value={yearRelease} onChange={this.changeHandler}/><br/>
                <label>Image</label><br/>
                <input type="text" name="imageCar" value={imageCar} onChange={this.changeHandler}/><br/>
                <button type="submit" className="btn btn-outline-susces btn-lg">Add</button>
            </form>
            </>
        )
    }
}

export default AddCarComponent