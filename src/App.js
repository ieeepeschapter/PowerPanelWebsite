import "./App.css";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Home from "./components/Home";
import Navbar from "./components/Nav";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/Utils/Loader";



function App() {
  const textFamilyStyle = {
    fontFamily: '"Playfair Display SC", serif',
  };

  const [loaderLoading, setLoaderLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderLoading(false);
    }, 200);
  }, []);

  return (
    <div style={textFamilyStyle}>
      {loaderLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
