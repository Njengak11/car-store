
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Header from './components/Header';
import DropDown from './components/DropDown';
import CarLogos from './components/CarLogos';
import Auction from './components/Auction';
import Model from './components/Model';
import Info from './components/Info'
import LogoGrid from './components/LogoGrid'
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Header />
      <DropDown />
      <CarLogos/>
      <Auction />
      <Model />
      <Info />
      <LogoGrid />
      <Reviews />
      <Footer />
    </div>
    
  );
}

export default App;
