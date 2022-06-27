import React from "react";
import logomini from "../assets/images/logomini.jpg";

const Header = () => {
  return <header>
              <div id="divminilogo"><img src={logomini} alt="logomini"/></div>
              <div id="pagetitle"><h1>Accueil</h1><i class="fas fa-home"></i></div>
              <div id="points"><i class="fas fa-ellipsis-v"></i></div>
      </header>;
};

  export default Header