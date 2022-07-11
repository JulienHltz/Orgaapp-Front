import './_newUser.scss'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  equipmentname: yup
    .string()
    .required("Le nom d'utilisateur est obligatoire !")
    .min(3, 'Minimum 3 caracteres !')
    .max(15),

  roles: yup.string().required()
})

const NewUser = () => {
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
    data.roles = [data.roles]
    console.log(data)
    axios
      .post('http://localhost:5050/api/users', data)
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
          <label htmlFor='equipmentname'>Nom du matos :</label>
          <input
            type='text'
            id='equipmentname'
            {...register('equipmentname')}
          />
          {errors.equipmentname && <span>{errors.equipmentname.message}</span>}

          <label htmlFor='etat'>Etat :</label>
          <select name='etat' id='etat' {...register('etat')}>
            <option value='#'>-- Choisir --</option>
            <option value='GOOD'>Bon Etat</option>
            <option value='BAD'>Endommager</option>
          </select>
          {errors.roles && <span>{errors.roles.message}</span>}

          <label htmlFor='stock'>En Stock :</label>
          <div className='stock'>
            <input type='checkbox' id='yes' name='yes' value='yes' />
            <label htmlFor='yes'>Oui</label>

            <input type='checkbox' id='no' name='no' value='no' />
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

export default NewUser
