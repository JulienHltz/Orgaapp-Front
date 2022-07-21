import { NavLink } from 'react-router-dom'
import Loader from '../components/Loader'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import EquipmentCard from '../components/EquipmentCard'
import ModEquipment from '../components/ModEquipment'
import './_user.scss'

const Equipement = () => {
  const token = sessionStorage.getItem('token')
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
        console.log('materiels: ', res.data)
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
      <>
        {isLoading ? (
          <Loader />
        ) : equipmentToModif === -1 ? (
          <div className='container'>
            <NavLink to='/materiel/nouveau-matos'>
              {/* <p>Ajouter du matériel</p> */}
              <i className='fas fa-plus-circle fa-2x add'></i>
            </NavLink>
            <NavLink to='/materiel/nouvelle-category'>
              <p>Ajouter une catégorie de matériel</p>
            </NavLink>
            {/* <NavLink to='/materiel/nouvel-etat'>
              <p>Ajouter un état</p>
            </NavLink> */}
            {equipmentList.map((equipment, index) => (
              <EquipmentCard
                key={index}
                index={index}
                equipment={equipment}
                onClick={delEquipment}
                modif={enableModif}
              />
            ))}
          </div>
        ) : (
          <ModEquipment
            equipment={equipmentList[equipmentToModif]}
            onSubmit={modifEquipment}
          />
        )}
      </>
    </>
  )
}

export default Equipement
