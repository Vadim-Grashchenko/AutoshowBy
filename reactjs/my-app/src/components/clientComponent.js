import React from "react";
import carServices from "../services/carServices";
import {Link, useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";



class ClientComponent extends React.Component {

       
        
        constructor(props) {
            super(props)
            this.state = {
                clients:[]
            }
        }
    

        componentDidMount() {
            carServices.getClient().then((response) => {
                this.setState({cars: response.data})
            });
        }

        deleteClient = (id) => {
            axios.delete(`http://localhost:8080/client/${id}`)
            .then(response => {
                if (response.data != null) {
                    alert("Delete?");
                }
            })

        }

        render(){

            return (
                <div>
                    <br/>
                    <br/>
                    <h4 id="add"><Link to={`save`}>Add Car</Link></h4>
                    <div class="cars">
                    {
                                this.state.clients.map(
                                    client =>
                                    <div class="car" key = {client.id}>
                                        {/* <div class="car-img">
                                            <p><img src ={car.imageCar}></img></p>
                                        </div> */}
                                        <div class="car-info-all">
                                            <div class="car-info">
                                                <h4> {client.surname} {client.name}</h4>
                                                <p>Phone number: {client.phoneNumber}</p>
                                            </div>
                                            {/* <div class="prise-car">
                                                <h4>{car.prise}$</h4>
                                            </div> */}
                                            <div className="delete-bt">
                                                <button id="delete" onClick={this.deleteClient.bind(this, client.id)}>Delete</button>
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

export default ClientComponent