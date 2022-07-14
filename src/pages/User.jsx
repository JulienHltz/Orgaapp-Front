import { NavLink } from 'react-router-dom'

import './_user.scss'

import UserCard from '../components/UserCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const User = () => {
  const token = localStorage.getItem('token')

  const [userList, setUserList] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        // console.log(res.data['hydra:member'])
        // setUserList((userList)=>[...userList, res.data['hydra:member']])
        setUserList(res.data['hydra:member'])
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <>
      {/* <div className='container'> */}
      {userList.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}

      <NavLink to='/nouvel-utilisateur'>
        <i className='fas fa-plus-circle fa-3x add'></i>
      </NavLink>
      {/* </div> */}
    </>
  )
}

export default User
