import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import { PropertyDetails } from './Pages/PropertyDetails';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/property/:id' element={<PropertyDetails/>} />
          </Routes>
    </>
  );
}

export default App;
