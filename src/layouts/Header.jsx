import { useContext, useEffect, useState } from 'react'
import { TitleContext } from './Layout'
import './_header.scss'
import React from 'react'
import logomini from '../assets/images/logomini.jpg'

import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  //
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const disconnect = () => {
    window.localStorage.removeItem('token')
    navigate('/connexion')
    setShow(false)
  }

  const title = useContext(TitleContext)

  const [icone, setIcone] = useState('')
  useEffect(() => {
    switch (title) {
      case 'Accueil':
        setIcone('fas fa-home')
        break
      case 'Connexion':
        setIcone('fas fa-key')
        break
      case 'Evénements':
        setIcone('fas fa-calendar-alt')
        break
      case 'Matos':
        setIcone('fas fa-microphone-alt')
        break
      case 'Groupes':
        setIcone('fas fa-drum')
        break
      case 'Utilisateurs':
        setIcone('fas fa-users')
        break

      default:
        break
    }
  }, [title])

  return (
    <>
      <header>
        <div id='divminilogo'>
          <img src={logomini} alt='logomini' />
        </div>

        <div id='pagetitle'>
          <h1>{title}</h1>
          <i className={icone}></i>
        </div>

        <div id='points'>
          {window.localStorage.getItem('token') != null && (
            <Dropdown>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                <i className='fas fa-ellipsis-v'></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleShow}>
                  <i className='fas fa-sign-out-alt'></i>
                  Déconnexion
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}

          {/* MODALE */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>Voulez-vous vraiment vous déconnecter ?</Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Non
              </Button>
              <Button variant='primary' onClick={disconnect}>
                Oui
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </header>
    </>
  )
}

export default Header
