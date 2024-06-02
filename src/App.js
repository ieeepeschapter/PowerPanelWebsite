import "./App.css";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Home from "./components/Home";
import Navbar from "./components/Nav";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import { Routes, Route } from "react-router-dom";

function App() {
  const textFamilyStyle = {
    fontFamily: '"Playfair Display SC", serif',
  };
  return (
    <div style={textFamilyStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/members" element={ <Team/> } />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    
    </div>
  );
}

export default App;
