import './App.css';
import Forms from './components/Content/form/Forms';
import Boost from './components/Content/Boost/Boost';
import Stat from './components/Content/illustration/Stat';
import About from './components/Header/About';
import Nav from './components/Header/Nav';
import Footer from './components/Footers/Footer';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <About/>
      <div className='content'>
        <Forms/>
        <Stat/>
        <Boost/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
