import './_newUser.scss'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Ce champ est requis !')
    .min(3, 'Minimum 3 caracteres !')
    .max(15),

  health: yup.string().required(),

  category: yup.string().required(),

  instock: yup.boolean().required()
})

const ModEquipment = ({ equipment, onSubmit }) => {
  const token = sessionStorage.getItem('token')

  const [healthSelect, setHealthSelect] = useState([])
  const [categorySelect, setCategorySelect] = useState([])
  const [defaultHealth, setDefaultHeath] = useState('')
  const [defaultCtagory, setDefaultCategory] = useState('')

  console.log(equipment)
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    defaultValues: {
      name: equipment.name,
      instock: equipment.inStock
    }
  })

  const { isSubmitting } = formState

  const modifEquipment = data => {
    onSubmit(data)
    console.log(data)
  }

  // const onSubmit = data => {
  //   // data.createdAt = '2022-07-12T15:18:40.868Z'
  //   // data.updatedAt = '2022-07-12T15:18:40.868Z'
  //   console.log(data)
  // }

  useEffect(() => {
    axios
      .all([
        axios.get(`http://localhost:5050/api/healths`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }),
        axios.get(`http://localhost:5050/api/categories`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      ])
      .then(res => {
        console.log('reponse:', res)
        setHealthSelect(res[0].data['hydra:member'])
        setCategorySelect(res[1].data['hydra:member'])
      })
      .catch(error => {
        console.log(error)
      })

    setDefaultHeath(equipment.health.name)
    setDefaultCategory(equipment.categorie.name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className='container'>
        <h2>Modifier du matériel</h2>
        <form action='' onSubmit={handleSubmit(modifEquipment)}>
          <label htmlFor='name'>Nom du matos :</label>
          <input type='text' id='name' name='name' {...register('name')} />
          {errors.equipmentname && <span>{errors.equipmentname.message}</span>}

          <label htmlFor='stock'>En Stock :</label>
          <div className='stock'>
            <div className='yes'>
              <input
                type='radio'
                id='yes'
                name='instock'
                value={true}
                {...register('instock')}
              />
              <label htmlFor='yes'>Oui</label>
            </div>
            <div className='no'>
              <input
                type='radio'
                id='no'
                name='instock'
                value={false}
                {...register('instock')}
              />
              <label htmlFor='no'>Non</label>
            </div>
          </div>

          <label htmlFor='health'>Etat :</label>
          <select
            name='health'
            id='health'
            defaultValue={defaultHealth}
            {...register('health')}
          >
            <option value='#'>-- Choisir --</option>
            {healthSelect.map((health, index) => (
              <option key={index} health={health} value={health.name}>
                {health.name}
              </option>
            ))}
          </select>
          {/* {errors.health && <span>{errors.health.message}</span>} */}

          <label htmlFor='category'>Catégorie :</label>
          <select
            name='category'
            id='category'
            defaultValue={defaultCtagory}
            {...register('category')}
          >
            <option value='#'>-- Choisir --</option>
            {categorySelect.map((category, index) => (
              <option key={index} health={category} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {/* {errors.category && <span>{errors.category.message}</span>} */}

          <button type='submit' disabled={isSubmitting}>
            Modifier
          </button>
        </form>
      </div>
    </>
  )
}

export default ModEquipment
