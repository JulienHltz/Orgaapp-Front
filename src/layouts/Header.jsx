import { useContext, useEffect, useState } from "react";
import { TitleContext } from "./Layout";
import "./_header.scss";
import React from "react";
import logomini from "../assets/images/logomini.jpg";

const Header = () => {
  // Header
  const title = useContext(TitleContext);

  const [icone, setIcone] = useState("");
  useEffect(() => {
    switch (title) {
      case "Accueil":
        setIcone("fas fa-home");
        break;
      case "Connexion":
        setIcone("fas fa-key");
        break;
      case "Evénements":
        setIcone("fas fa-calendar-alt");
        break;
      case "Matos":
        setIcone("fas fa-microphone-alt");
        break;
      case "Groupes":
        setIcone("fas fa-drum");
        break;
      case "Utilisateurs":
        setIcone("fas fa-users");
        break;

      default:
        break;
    }
  }, [title]);

  return (
    <header>
      <div id="divminilogo">
        <img src={logomini} alt="logomini" />
      </div>

      <div id="pagetitle">
        <h1>{title}</h1>
        <i className={icone}></i>
      </div>

      <div id="points"></div>
    </header>
  );
};

export default Header;
