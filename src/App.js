// import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
// import Card from './Components/Cards/Card';
import Section from './Components/Cards/Section';
// import item from './Components/Cards/Card'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={
      <>
       <Navbar/> 
       <Hero/>
       <Section title="Top Albums" 
       apiEndPoint={"https://qtify-backend.labs.crio.do/albums/top"}/> 
       {/* <Section title="New Albums" apiEndpoint={"https://qtify-backend.labs.crio.do/albums/new"} />  */}
       {/* <Card data={item}/>  */}
      </>
      }
      />
      </Routes>
      </BrowserRouter>
     </div> 
   );
  }
 
export default App;