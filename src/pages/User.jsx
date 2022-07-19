import { NavLink } from 'react-router-dom'
import ModUser from '../components/ModUser'
import './_user.scss'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const User = () => {
  const token = sessionStorage.getItem('token')
  const [isLoading, setIsLoading] = useState(true)
  const [userList, setUserList] = useState([])
  const [userToModif, setUserToModif] = useState(-1)

  const delUser = (id, index) => {
    setIsLoading(true)

    axios
      .delete(`http://localhost:5050${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        userList.splice(index, 1)

        setIsLoading(false)
      })
      .catch(error => {
        // console.log(error)
        setIsLoading(false)
      })
  }

  const enableModif = index => {
    setUserToModif(index)
  }

  const modifUser = data => {
    // console.log()
    data.roles = [data.roles]
    setIsLoading(true)

    axios
      .put(`http://localhost:5050${userList[userToModif]['@id']}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        let userTmp = userList
        userTmp[userToModif] = res.data
        setUserList(userTmp)

        setUserToModif(-1)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setUserToModif(-1)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        // console.log(res.data)
        // console.log(res.data['hydra:member'])
        // setUserList((userList)=>[...userList, res.data['hydra:member']])
        setUserList(res.data['hydra:member'])
        setIsLoading(false)
      })
      .catch(error => {
        // console.log(error)
      })
  }, [])
  return (
    <>
      <div className='container'>
        {isLoading ? (
          <Loader />
        ) : userToModif === -1 ? (
          <>
            <NavLink to='/nouvel-utilisateur'>
              <i className='fas fa-plus-circle fa-2x add'></i>
            </NavLink>
            {userList.map((user, index) => (
              <UserCard
                key={index}
                index={index}
                user={user}
                onClick={delUser}
                modif={enableModif}
              />
            ))}
          </>
        ) : (
          <ModUser user={userList[userToModif]} onSubmit={modifUser} />
        )}
      </div>
    </>
  )
}

export default User
