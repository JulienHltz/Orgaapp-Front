import { createContext, useEffect, useState } from "react";

import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";

export const TitleContext = createContext();

const Titre = ({ component }) => {
  const [title, setTitle] = useState(null);

  useEffect(() => {
    switch (component) {
      case "home":
        setTitle("Accueil");
        document.title = "Orgaapp - Accueil";
        break;
      case "login":
        setTitle("Connexion");
        document.title = "Orgaapp - Connexion";
        break;
      case "equipement":
        setTitle("Matos");
        document.title = "Orgaapp - Matos";
        break;
      case "band":
        setTitle("Groupes");
        document.title = "Orgaapp - Groupes";
        break;
      case "event":
        setTitle("Evénements");
        document.title = "Orgaapp - Evénements";
        break;
      case "user":
        setTitle("Utilisateurs");
        document.title = "Orgaapp - Utilisateurs";
        break;
      case "newuser":
        setTitle("Utilisateurs");
        document.title = "Orgaapp - Utilisateurs";
        break;
      default:
        break;
    }
    // document.title=title
  }, [component]);

  return (
    <>
      <TitleContext.Provider value={title}>
        <Header />
      </TitleContext.Provider>
      <Main component={component} />
      <Nav />
    </>
  );
};

export default Titre;
