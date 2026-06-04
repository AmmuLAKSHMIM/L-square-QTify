// import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<><Navbar/> <Hero/></>}/>
      </Routes>
      </BrowserRouter>
     </div> 
   );
  }
 
export default App;