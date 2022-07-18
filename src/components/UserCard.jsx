const UserCard = ({ user, onClick, index, modif }) => {
  const delUser = () => {
    onClick(user['@id'], index)
  }

  const enableModif = () => {
    modif(index)
  }

  return (
    <div className='card'>
      <h4>{user.username}</h4>
      {user.roles[0] === 'ROLE_ADMIN' && <h6>Admin</h6>}
      {user.roles[0] === 'ROLE_USER' && <h6>User</h6>}
      <ul className='mod-sup'>
        <li className='mod' onClick={enableModif}>
          <i className='fas fa-edit'></i>
        </li>
        <li className='sup' onClick={delUser}>
          <i className='fas fa-trash-alt'></i>
        </li>
      </ul>
    </div>
  )
}

export default UserCard
