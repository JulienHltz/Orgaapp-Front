import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Equipement from "./pages/Equipement";
import Band from "./pages/Band";
import Event from "./pages/Event";
import User from "./pages/User";

const App = () => {
  return(
    
    <BrowserRouter>
   <Routes>
     <Route exact path="/" element={<Login />}></Route>
     <Route path="/materiel" element={<Equipement />}></Route>
     <Route path="/groupes" element={<Band />}></Route>
     <Route path="/evenements" element={<Event />}></Route>
     <Route path="/utilisateurs" element={<User />}></Route>
     </Routes>
  </BrowserRouter>
    );
  };

export default App;