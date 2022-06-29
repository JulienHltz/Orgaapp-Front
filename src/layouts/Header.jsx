import { useContext, useEffect } from "react";
import { TitleContext } from "./Titre";

import './_header.scss';

import logomini from "../assets/images/logomini.jpg";

const Header = () => {
  const title = useContext(TitleContext)
  
  useEffect(() => {
  }, [title]);

  return (
  
  <header>
    <div id="divminilogo">
      
        <img src={logomini} alt="logomini" />
      
    </div>

    <div id="pagetitle">
      <h1>{title}</h1>
    </div>
    
    <div id="points"><i className="fas fa-ellipsis-v"></i></div>
  </header>

  );
};

export default Header;