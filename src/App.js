import {Navbar, Footer} from "./components"
import {Home, About, Projects} from "./pages"

import './App.css';

function App() {
  return (
    <div className="App">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <Navbar />
        <Home />
        <About />
        <Projects />
      <Footer />
    </div>
  );
}

export default App;
