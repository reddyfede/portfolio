import { Route, Routes } from "react-router-dom";
import {Header, Footer} from "../../components"
import {Home, About, Projects} from "../../pages"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
