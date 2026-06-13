// Milestone 1
 // import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter , Routes , Route } from "react-router-dom"
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import Card from './Components/Cards/Card';
// import Section from './Components/Cards/Section';
// import item from './Components/Cards/Card'
// function App() {
//   return (
//     <div className="App">
//      <BrowserRouter>
//      <Routes>
//       <Route path='/' element={
//       <>
//        <Navbar/> 
//        <Hero/>
//        <Section title="Top Albums" 
//        apiEndPoint={"https://qtify-backend.labs.crio.do/albums/top"}/> 
//        <Section title="New Albums" apiEndpoint={"https://qtify-backend.labs.crio.do/albums/new"} /> 
//        <Card data={item}/> 
//       </>
//       }
//       />
//       </Routes>
//       </BrowserRouter>
//      </div> 
//    );
//   }
// export default App;
 
// Milestone - 3
// import React from "react";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import Section from "./Components/Cards/Section";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <main style={{ padding: "20px 32px", display: "flex", flexDirection: "column", gap: "40px" }}>
//         <Section 
//           title="Top Albums" 
//           apiEndPoint="https://qtify-backend.labs.crio.do/albums/top" 
//           type="album" 
//         />
//         <Section 
//           title="New Albums" 
//           apiEndPoint="https://qtify-backend.labs.crio.do/albums/new" 
//           type="album" 
//         />
//       </main>
//     </div>
//   );
// }
// export default App;

// Milestone - 4
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero"
import Section from "./Components/Cards/Section";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main style={{ padding: "20px 0", display: "flex", flexDirection: "column", gap: "40px" }}>
        
        {/* Milestone 3: Top Albums */}
        <Section 
          title="Top Albums" 
          apiEndPoint="https://qtify-backend.labs.crio.do/albums/top" 
          type="album" 
        />

        {/* Milestone 3: New Albums */}
        <Section 
          title="New Albums" 
          apiEndPoint="https://qtify-backend.labs.crio.do/albums/new" 
          type="album" 
        />

        {/* 🔹 MILESTONE 4 CHANGE: Mounted the filtered songs carousel slider instance */}
        <Section 
          title="Songs" 
          apiEndPoint="https://qtify-backend.labs.crio.do/songs" 
          filterSource="https://qtify-backend.labs.crio.do/genres" // Triggers internal tabs system
          type="song" 
        />

      </main>
    </div>
  );
}

export default App;