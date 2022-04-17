import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import useServices from './customHooks/customHooks';
import Checkout from './Pages/Home/Checkoutf/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Home/Service/Service';
import Notfound from './Pages/Notfound/Notfound';

export const ServiceContext = createContext();
function App() {
  const [services, setServices] = useServices();
  return (
    <ServiceContext.Provider value={[services, setServices]}>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/service/:id' element={<Checkout></Checkout>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </ServiceContext.Provider>
  );
}

export default App;
