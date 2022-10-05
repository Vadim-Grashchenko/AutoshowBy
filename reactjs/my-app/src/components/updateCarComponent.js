import React from "react";
import {Link, useParams, useSearchParams} from 'react-router-dom';
import axios from "axios";


class UpdateCarComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            prise: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        var baseUrl = (window.location).href; // You can also use document.URL
        var koopId = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);

        console.log(this.state)
        console.log(koopId)

        axios.post(`http://localhost:8080/${koopId}/update`, this.state, {
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
        const {prise} = this.state
        return(
            <>
            <br/>
            <form onSubmit={this.submitHandler}>
                <label>Prise</label>
                <input type="text" name="prise" value={prise} onChange={this.changeHandler}/><br/>
                <button type="submit" className="btn btn-outline-susces btn-lg">Add</button>
            </form>
            </>
        )
    }
}

export default UpdateCarComponent