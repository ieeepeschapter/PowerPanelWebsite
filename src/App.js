import './App.css';
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
    </div>
  );
}

export default App;
