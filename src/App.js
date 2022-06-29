import { BrowserRouter, Route, Routes } from "react-router-dom";

import Titre from "./layouts/Titre";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Titre component="home" />}>
        </Route>

        <Route path="/connexion" element={<Titre component="login" />}>
        </Route>

        <Route path="/materiel" element={<Titre component="equipement" />}>  
        </Route>

        <Route path="/groupes" element={<Titre component="band" />}> 
        </Route>

        <Route path="/evenements" element={<Titre component="event" />}>
        </Route>

        <Route path="/utilisateurs" element={<Titre component="user" />}>  
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
