import { createContext, useEffect, useState } from 'react';

import Header from './Header';
import Nav from './Nav';
import Main from "../layouts/Main";

export const TitleContext = createContext();

const Titre = ({component}) => {
    const [title, setTitle] = useState(null);

    useEffect(() => {
        switch (component) {
            case 'home':
                setTitle('Accueil');
                break;
            case 'login':
                setTitle('Connexion');
                break;
            case 'equipement':
                setTitle('Matos');
                break;
            case 'band':
                setTitle('Groupes');
                break;
            case 'event':
                setTitle('Evénements');
                break;
            case 'user':
                setTitle('Utilisateurs');
                break;
            default:
                break;
        }
        document.title=title
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