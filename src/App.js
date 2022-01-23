
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Header from './components/Header';
import DropDown from './components/DropDown';
import CarLogos from './components/CarLogos';
import Auction from './components/Auction';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Header />
      <DropDown />
      <CarLogos/>
      <Auction />
    </div>
    
  );
}

export default App;
