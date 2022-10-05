
import './App.css';
import CarComponent from './components/carComponent';
import Car from './Pages/car';
import Brand from './Pages/brand';
import Layout from './components/layout';
import EmployeeComponent from './components/employeeComponent';
import AddCarComponent from './components/addCarComponent';
import UpdateCarComponent from './components/updateCarComponent';
import ClientComponent from './components/clientComponent';

import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CarComponent />}/>
          <Route path="car/:id" element={<Car />}/>
          <Route path="cars/:carBrand" element={<Brand />}/>
          <Route path="cars" element={<CarComponent />}/> 
          <Route path="employees" element={<EmployeeComponent />}/>
          <Route path="cars/save" element={<AddCarComponent />}/>
          <Route path='cars/update/:id' element={<UpdateCarComponent/>}/>
          <Route path='client' element={<ClientComponent/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
