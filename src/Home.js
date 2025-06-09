
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
function Home() {

  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
