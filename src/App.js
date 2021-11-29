import logo from './logo.svg';
import './App.css';
import HeroCarousel from './components/carousel'
import { Container,Paper, Button } from '@mui/material';
import PrimarySearchAppBar from './components/navbar';
import About from './components/about';
import Service from './components/service';
import Galler from './components/gallery';
import Testemonial from './components/testemonial';
import Contact from './components/contact';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
   
  return (
    <div className="App">
     <div className="navCarousel">
     <PrimarySearchAppBar className="primarynav"/>
        <HeroCarousel className="herocarousel" />
     </div>
     <br></br><br></br>
     <a id="about"> <About  /></a>  
      <br></br><br></br>
     <a id="service"><Service /></a>
     <br></br><br></br>
     <a id="gallery"><Galler/></a>
     <a  id="testimonial"><Testemonial/></a>
     <br></br><br></br><br></br><br></br>
     <a id="contact"><Contact /></a>
     <br></br><br></br><br></br>
     <Footer />

       
 
    </div>
  );
}

export default App;
