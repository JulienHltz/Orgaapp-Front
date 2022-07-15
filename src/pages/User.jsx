import { NavLink } from 'react-router-dom'

import './_user.scss'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const User = () => {
  const token = localStorage.getItem('token')
  const [isLoading, setIsLoading] = useState(true)
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
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <>
      <div className='container'>
        <NavLink to='/nouvel-utilisateur'>
          <i className='fas fa-plus-circle fa-2x add'></i>
        </NavLink>
        {isLoading ? (
          <Loader />
        ) : (
          userList.map((user, index) => <UserCard key={index} user={user} />)
        )}
      </div>
    </>
  )
}

export default User
