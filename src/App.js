import './App.css';
import Contact from './components/Contact';
import Events from './components/Events';
import Navbar from './components/Nav';
import Team from './components/Team';

function App() {
  
  const textFamilyStyle = {
    fontFamily: '"Poppins", sans-serif',
  };
  return (
    <div style={textFamilyStyle}> 
    <Navbar/>
    {/* <Team/> */}
    <Events/>
    {/* <Contact/> */}
    </div>
  );
}

export default App;
