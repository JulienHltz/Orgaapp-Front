import { useNavigate } from 'react-router-dom'
import './_newUser.scss'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Le nom d'utilisateur est obligatoire !")
    .min(3, 'Minimum 3 caracteres !')
    .max(15),

  firstname: yup
    .string()
    .required('Le prénom est obligatoire')
    .min(3, 'Minimum 3 caracteres !')
    .max(15),

  lastname: yup
    .string()
    .required('Le nom est obligatoire !')
    .min(3, 'Minimum 3 caracteres !')
    .max(15),

  roles: yup.string().required(),

  email: yup
    .string()
    .email('Entrez un format de mail valid !')
    .required("L'ajout d'un mail est obligatoire !"),

  plainPassword: yup
    .string()
    .required('Vous devez entrer un mot de passe !')
    .min(5, 'Minimum 5 caractères !')
})

const NewUser = () => {
  const token = sessionStorage.getItem('token')

  const navigate = useNavigate()

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
      .post('http://localhost:5050/api/users', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response)
        navigate('/utilisateurs')
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
          {errors.firstname && <span>{errors.firstname.message}</span>}

          <label htmlFor='lastname'>Nom :</label>
          <input type='text' id='lastname' {...register('lastname')} />
          {errors.lastname && <span>{errors.lastname.message}</span>}

          <label htmlFor='role'>Rôle</label>
          <select name='role' id='roles' {...register('roles')}>
            <option value='ROLE_USER'>User</option>
            <option value='ROLE_ADMIN'>Admin</option>
          </select>
          {errors.roles && <span>{errors.roles.message}</span>}

          <label htmlFor='email'>Email :</label>
          <input type='mail' id='email' {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor='plainpassword'>Mot de passe :</label>
          <input
            type='password'
            id='plainPassword'
            {...register('plainPassword')}
          />
          {errors.plainPassword && <span>{errors.plainPassword.message}</span>}

          <button type='submit' disabled={isSubmitting}>
            Ajouter
          </button>
        </form>
      </div>
    </>
  )
}

export default NewUser
