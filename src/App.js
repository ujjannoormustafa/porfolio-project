import Navbar from "./Componets/navbar/Navbar";
import Main from "./Componets/main/Main";
import About  from "./Componets/about/About";
import Services from "./Componets/services/Services";
import  Skills  from "./Componets/skills/skills";
import Contact from './Componets/contact/Contact';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
   <Routes>
    {/* <Route path="/" element={<Navbar/>} /> */}
    <Route path="/" element={<Main/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/contact" element={<Contact/>} />
    
  </Routes>
  );
}

export default App;
