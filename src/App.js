import Navbar from './components/navbar/navbar'
import Intro from './components/Intro/intro'
import Skills from './components/Skills/skills'
import Portfolio from './components/portfolio/portfolio';
import TechnologyStack from './components/technologystack/technologystack';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <TechnologyStack/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
 