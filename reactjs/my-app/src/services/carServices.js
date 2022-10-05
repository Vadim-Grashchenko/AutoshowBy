import axios from 'axios'

const CAR_REST_API_URL = 'http://localhost:8080/cars';

class CarService {
    
    getCars() {
       return axios.get(CAR_REST_API_URL);
    }   
}

export default new CarService();