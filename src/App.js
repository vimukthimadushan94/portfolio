import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HireMe from "./components/HireMe";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Skills from "./components/Skills";
// import Testimonial from "./components/Testimonial";


function App() {
  return (
    <>
        <NavBar/>
        <Header/>
        <About/>
        <Service/>
        <Skills/>
        <Portfolio/>
        {/* <Testimonial/> */}
        <HireMe/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
