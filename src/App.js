import './App.css';
import Hero from './components/hero';
import Navbar from './components/Navbar';
import Connect from "./components/Connect";
import Services from './components/Services';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <div className="container">
      <div className="hero-container">
      <Navbar />
      <Hero />
      </div>
    </div>
    <div class="content-container">
      <Connect />
      <Services/>
      <Team/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
