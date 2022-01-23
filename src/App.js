
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Header from './components/Header';
import DropDown from './components/DropDown';
import CarLogos from './components/CarLogos';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Header />
      <DropDown />
      <CarLogos/>
    </div>
    
  );
}

export default App;
