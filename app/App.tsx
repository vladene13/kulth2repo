// components
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Hero from '../components/hero';
//import Heroimage from '../components/heroimage';
import Product from '../components/product'
import Join from '../components/join';
import Navbar from '../components/navbar';
import Process from '../components/process';
import Process2 from '../components/process2';
import Service2 from '../components/service2';
//import Service from '../components/sevice';
//import Tech from '../components/tech';

// external css
import './App.css';
function App() {
  return (
    <>
    <div
        className={'bg-hero-pattern bg-cover bg-no-repeat bg-center'}
        
      >
      
      <div
        className={'max-sm:mx-0 container mx-auto overflow-hidden'}
        
      >
        <Navbar />
        <main>
          <Hero />
          <About /> 
          <Product />            
          <Process />
          <Process2 />
          <Service2 /> 
          
        </main>
        <Footer />
      </div>
      </div>
    </>
  );
}

export default App;
//Service2 este roadmap ul
//<Tech />
// <Heroimage />
//<Service /> 
{/* <Join />
          <Contact /> */}

