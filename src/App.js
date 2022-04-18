import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import useServices from './customHooks/customHooks';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Home/Checkoutf/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Home/Service/Service';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Notfound from './Pages/Notfound/Notfound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

export const ServiceContext = createContext();
function App() {
  const [services, setServices] = useServices();
  return (
    <ServiceContext.Provider value={[services, setServices]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/service/:id' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </ServiceContext.Provider>
  );
}

export default App;
