import { useContext, useEffect, useState } from "react";
import { TitleContext } from "./Layout";
import './_header.scss';
import React from 'react';
import logomini from "../assets/images/logomini.jpg";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById('root'));

const Header = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const title = useContext(TitleContext)
  
  const [icone, setIcone] = useState("");
  useEffect(() => {switch (title) {
    case 'Accueil':
      setIcone("fas fa-home");
      break;
    case 'Connexion':
      setIcone("fas fa-key");
      break;
    case 'Evénements':
      setIcone("fas fa-calendar-alt");
      break;
    case 'Matos':
      setIcone("fas fa-microphone-alt");
      break;
    case 'Groupes':
      setIcone("fas fa-drum");
      break;
    case 'Utilisateurs':
      setIcone("fas fa-users");
      break;
  
    default:
      break;
  }}, [title]);
  
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = '#f00'
    console.log('salut');
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
  
  <header>
    <div id="divminilogo">
      
        <img src={logomini} alt="logomini" />
      
    </div>

    <div id="pagetitle">
      <h1>{title}</h1><i className={icone}></i>
    </div>
    
    <div id="points">
      <button onClick={openModal}><i className="fas fa-sign-out-alt"></i></button>
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        portalClassName="openmodal"
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal">
        {/* Contenu de la modal */}
        <p>Voulez vous vraiment vous déconnecter ?</p>
        <div id="buttonDiv">
        <button id="yes" onClick={closeModal}>Oui</button>
        <button id="no" onClick={closeModal}>Non</button>
        </div>
        {/* Fin de la modal */}
      </Modal>
        </div>
  </header>

  );

};



export default Header;