
import './App.css';
import Corousal from './components/Corousal';
import About from './components/about/About';
import Appointment from './components/appointment/Appointment';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import PricePackage from './components/price/PricePackage';
import Sevicebase from './components/service/Sevicebase';
import Team from './components/team/Team';

function App() {
  return (
    <>
      <Navbar/>
      <Corousal/>
      <Sevicebase/>
      <About/>
      <Team/>
      <PricePackage/>
      <Appointment/>
      <Footer/>
    </>
  );
}

export default App;
