import './_newUser.scss'
import axios from 'axios'
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

  inStock: yup.boolean().required()
})

const NewEquipment = () => {
  const token = localStorage.getItem('token')

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
    data.health = '/api/healths/1'
    data.status = 'wtf'
    data.createdAt = '2022-07-12T15:18:40.868Z'
    data.updatedAt = '2022-07-12T15:18:40.868Z'
    data.categorie = '/api/categories/1'

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
            <option value='GOOD'>Bon Etat</option>
            <option value='BAD'>Endommagé</option>
          </select>
          {errors.roles && <span>{errors.roles.message}</span>}

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
