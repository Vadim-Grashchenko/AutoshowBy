import React from "react";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

const Cars = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const carQuery = searchParams.get('car') || '';
    const {id} = useParams();
    const[car, setCar] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/cars`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, [id]);

    handleSubmit = (e) => {
          

        e.preventDefault();
        const form = e.target;

        const query = form.search.value;

        setSearchParams({car: query})
    }

    return (

        <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input type="search" name="search" />
            <input type="submit" value="Search" />
        </form>
    )
}

export default Cars;