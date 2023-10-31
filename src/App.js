import Navbar from "./components/Navbar/navbar";
import Skill from "./components/Skills/skill";
import Intro from "./components/intro/intro";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import About from "./components/About/About";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
    
      {/* <About/> */}
      
      
    </div>
  );
}

export default App;
