const UserCard = ({ user }) => {
  return (
    <div className='card'>
      <h4>{user.username}</h4>
      <ul className='mod-sup'>
        <li className='mod'>
          <i className='fas fa-edit'></i>
        </li>
        <li className='sup'>
          <i className='fas fa-trash-alt'></i>
        </li>
      </ul>
    </div>
  )
}

export default UserCard
