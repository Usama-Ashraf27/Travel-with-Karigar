import './App.css';
import Carousel from './Componets/Carousel';
import Destinations from './Componets/Destinations';
import Footer from './Componets/Footer';
import Hero from './Componets/Hero';
import Navbar from './Componets/Navbar';
import Search from './Componets/Search';
import Selects from './Componets/Selects';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
