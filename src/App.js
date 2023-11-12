import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header'
import Home from './containers/Home';
import About from './containers/About';
import Project from './containers/Project';
import Footer from './component/Footer'
import Contact from './containers/Contact';
import WA from './component/WA'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      <Footer/>
      <WA />
      </BrowserRouter>
    </div>
  );
}

export default App;