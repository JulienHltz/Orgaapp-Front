import { NavLink } from 'react-router-dom'
import Loader from '../components/Loader'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import EquipmentCard from '../components/EquipmentCard'
import ModEquipment from '../components/ModEquipment'
import './_user.scss'

const Equipement = () => {
  const token = localStorage.getItem('token')
  const [isLoading, setIsLoading] = useState(true)
  const [equipmentList, setEquipmentList] = useState([])
  const [equipmentToModif, setEquipmentToModif] = useState(-1)

  const delEquipment = (id, index) => {
    setIsLoading(true)

    axios
      .delete(`http://localhost:5050${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        equipmentList.splice(index, 1)

        setIsLoading(false)
      })
      .catch(error => {
        // console.log(error)
        setIsLoading(false)
      })
  }

  const enableModif = index => {
    setEquipmentToModif(index)
  }

  const modifEquipment = data => {
    setIsLoading(true)

    axios
      .put(
        `http://localhost:5050${equipmentList[equipmentToModif]['@id']}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(res => {
        let equipmentTmp = equipmentList
        equipmentTmp[equipmentToModif] = res.data
        setEquipmentList(equipmentTmp)

        setEquipmentToModif(-1)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setEquipmentToModif(-1)
        setIsLoading(false)
      })
  }
  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/materiels`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        // console.log(res.data)
        // console.log(res.data['hydra:member'])

        setEquipmentList(res.data['hydra:member'])
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
        ) : equipmentToModif === -1 ? (
          <>
            <NavLink to='/nouveau-matos'>
              <i className='fas fa-plus-circle fa-2x add'></i>
            </NavLink>
            {equipmentList.map((user, index) => (
              <EquipmentCard
                key={index}
                index={index}
                user={user}
                onClick={delEquipment}
                modif={enableModif}
              />
            ))}
          </>
        ) : (
          <ModEquipment
            user={equipmentList[equipmentToModif]}
            onSubmit={modifEquipment}
          />
        )}
      </div>
      <NavLink to='/nouvelle-category'>
        <p>Ajouter une catégorie de matériel</p>
      </NavLink>
      <NavLink to='/nouvel-etat'>
        <p>Ajouter un état</p>
      </NavLink>
    </>
  )
}

export default Equipement
