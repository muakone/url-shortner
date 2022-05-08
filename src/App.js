import './App.css';
import Nav from './components/Header/Nav';
import Footer from './components/Footers/Footer';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import MobileNav from './components/Header/MobileNav'
import Contact from './pages/Contact';
import About from './pages/About';
import Details from './pages/Details';

function App() {
  return (
    <div className='App'>
      <Nav className='display-desktop'/>
      <MobileNav />
      <div>
        <Routes>
          <Route exact path='/' element={<Home /> } />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/link-info/:study' element={<Details /> } />
          <Route path='*' element={<h1 className='text-center mt-5 not-found'>Not Found</h1>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
