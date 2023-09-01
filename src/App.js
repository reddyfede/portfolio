import {Navbar, Footer} from "./components"
import {Home, About, Projects} from "./pages"

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
