import logoOrgaapp from '../assets/images/logofull.png'
import './_loginform.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoginSuccess from '../pages/LoginSuccess'

const LoginForm = () => {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [isConnected, setIsConnected] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post('http://localhost:5050/api/login', {
        email: userEmail,
        password: userPassword
      })
      .then(response => {
        window.localStorage.setItem('token', response.data.token)
        setIsConnected(true)
        setTimeout(() => {
          navigate('/')
        }, 5000)
      })
      .catch(e => {
        console.log(e.code)
      })
  }

  return (
    <>
      {isConnected ? (
        <>
          <LoginSuccess />
        </>
      ) : (
        <div id='loginContainer'>
          <div className='imgLoginContainer'>
            <img src={logoOrgaapp} alt='logoOrgaapp' />
          </div>
          <div id='loginFormContainer'>
            <form action='' className='app-form' onSubmit={handleSubmit}>
              <label htmlFor='useremail'>Email :</label>
              <input
                type='email'
                id='useremail'
                className='form-control'
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
              />
              <label htmlFor='userpassword'>Mot de passe :</label>
              <input
                type='password'
                id='userpassword'
                className='form-control'
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
              />
              <button type='sumbit' className='app-button'>
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
export default LoginForm
