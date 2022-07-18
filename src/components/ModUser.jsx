import './_newUser.scss'
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
    .required("L'ajout d'un mail est obligatoire !")
})

const ModUser = ({ user, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    defaultValues: {
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      roles: user.roles[0],
      email: user.email
    }
  })

  const { isSubmitting } = formState

  const modifUser = data => {
    onSubmit(data)
  }

  return (
    <>
      <div className='container'>
        <h2>Modifier un utilisateur</h2>
        <form action='' onSubmit={handleSubmit(modifUser)}>
          <label htmlFor='username'>Nom d'utilisateur :</label>
          <input type='text' id='username' {...register('username')} />
          {errors.username && <span>{errors.username.message}</span>}

          <label htmlFor='firstname'>Prénom :</label>
          <input type='text' id='firstname' {...register('firstname')} />
          {errors.firstname && <span>{errors.firstname.message}</span>}

          <label htmlFor='lastname'>Nom :</label>
          <input type='text' id='lastname' {...register('lastname')} />
          {errors.lastname && <span>{errors.lastname.message}</span>}

          <label htmlFor='roles'>Rôle</label>
          <select name='roles' id='roles' {...register('roles')}>
            <option value='ROLE_USER'>User</option>
            <option value='ROLE_ADMIN'>Admin</option>
          </select>
          {errors.roles && <span>{errors.roles.message}</span>}

          <label htmlFor='email'>Email :</label>
          <input type='mail' id='email' {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}

          <button type='submit' disabled={isSubmitting}>
            Modifier
          </button>
        </form>
      </div>
    </>
  )
}

export default ModUser
