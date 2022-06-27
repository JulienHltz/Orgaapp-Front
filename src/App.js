import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Equipement from "./pages/Equipement";
import Band from "./pages/Band";
import Event from "./pages/Event";


const App = () => {
  return(
    
    <BrowserRouter>
   <Routes>
     <Route path="/" element={<Login />}></Route>
     </Routes>
  </BrowserRouter>
    );
  };
  export default App;
//  <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Login />}></Route>
//    <Route path="/" element={<Equipement />}></Route>
//    <Route path="/" element={<Band />}></Route>
//    <Route path="/" element={<Event />}></Route>
//    <Route path="*" element={<Login />}></Route>
//   </Routes>
//   </BrowserRouter>