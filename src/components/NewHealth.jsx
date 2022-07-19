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
    .max(15)
})

const NewHealth = () => {
  const token = sessionStorage.getItem('token')

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
    // data.status = 'wtf'
    // data.createdAt = '2022-07-12T15:18:40.868Z'
    // data.updatedAt = '2022-07-12T15:18:40.868Z'
    // data.categorie = '/api/categories/1'

    console.log(data)
    axios
      .post('http://localhost:5050/api/healths', data, {
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
        <h2>Ajouter un état !</h2>
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='name'>Etat :</label>
          <input type='text' id='name' name='name' {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}

          <button type='submit' disabled={isSubmitting}>
            Ajouter
          </button>
        </form>
      </div>
    </>
  )
}

export default NewHealth
