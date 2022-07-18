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

  inStock: yup.boolean().required()
})

const NewEquipment = () => {
  const token = localStorage.getItem('token')

  const [healthSelect, setHealthSelect] = useState([])
  const [categorySelect, setCategorySelect] = useState([])

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  })

  const { isSubmitting } = formState

  const onSubmit = data => {
    // data.health = '/api/healths/1'
    data.status = 'wtf'
    data.createdAt = '2022-07-12T15:18:40.868Z'
    data.updatedAt = '2022-07-12T15:18:40.868Z'
    // data.categorie = '/api/categories/1'

    console.log(data)

    axios
      .post('http://localhost:5050/api/materiels', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e.code)
      })
  }

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
        console.log(res)
        setHealthSelect(res[0].data['hydra:member'])
        setCategorySelect(res[1].data['hydra:member'])
      })
      .catch(error => {
        console.log(error)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className='container'>
        <h2>Ajouter du matos !</h2>
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='name'>Nom du matos :</label>
          <input type='text' id='name' name='name' {...register('name')} />
          {errors.equipmentname && <span>{errors.equipmentname.message}</span>}

          <label htmlFor='health'>Etat :</label>
          <select name='health' id='health' {...register('health')}>
            <option value='#'>-- Choisir --</option>
            {healthSelect.map((health, index) => (
              <option key={index} health={health} value={health.name}>
                {health.name}
              </option>
            ))}
          </select>
          {/* {errors.health && <span>{errors.health.message}</span>} */}

          <label htmlFor='category'>Catégorie :</label>
          <select name='category' id='category' {...register('category')}>
            <option value='#'>-- Choisir --</option>
            {categorySelect.map((category, index) => (
              <option key={index} health={category} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {/* {errors.category && <span>{errors.category.message}</span>} */}

          <label htmlFor='stock'>En Stock :</label>
          <div className='stock'>
            <input
              type='radio'
              id='yes'
              name='yes'
              value={true}
              {...register('inStock')}
            />
            <label htmlFor='yes'>Oui</label>

            <input
              type='radio'
              id='no'
              name='yes'
              value={false}
              {...register('inStock')}
            />
            <label htmlFor='no'>Non</label>
          </div>
          <button type='submit' disabled={isSubmitting}>
            Ajouter
          </button>
        </form>
      </div>
    </>
  )
}

export default NewEquipment
