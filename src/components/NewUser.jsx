import './_newUser.scss'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(3, 'Minimum 3 caracteres !!')
    .max(15)
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
        <h2>Ajouter un nouvel utilisateur</h2>
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='username'>Nom d'utilisateur :</label>
          <input type='text' id='username' {...register('username')} />
          {errors.username && <span>{errors.username.message}</span>}
          <label htmlFor='firstname'>Prénom :</label>
          <input type='text' id='firstname' {...register('firstname')} />
          <label htmlFor='lastname'>Nom :</label>
          <input type='text' id='lastname' {...register('lastname')} />
          <label htmlFor='role'>role</label>
          <select name='role' id='roles' {...register('roles')}>
            <option value='User'>User</option>
            <option value='Admin'>Admin</option>
          </select>
          <label htmlFor='email'>Email :</label>
          <input type='mail' id='email' {...register('email')} />
          <label htmlFor='password'>Mot de passe :</label>
          <input type='text' id='password' {...register('password')} />
          <button type='submit' disabled={isSubmitting}>
            Ajouter
          </button>
        </form>
      </div>
    </>
  )
}

export default NewUser
