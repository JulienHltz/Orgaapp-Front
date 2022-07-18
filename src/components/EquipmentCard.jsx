const EquipmentCard = ({ user, onClick, index, modif }) => {
  const delEquipment = () => {
    onClick(user['@id'], index)
  }

  const enableModif = () => {
    modif(index)
  }

  return (
    <div className='card'>
      <h4>{user.name}</h4>
      <div className='etat'>
        <p>{user.healths}</p>
      </div>
      {/* <div className='created-date'>
        <p>{user.createdAt}</p>
      </div>
      <div className='modificated-date'>
        <p>{user.modificatedAt}</p>
      </div> */}
      <ul className='mod-sup'>
        <li className='mod' onClick={enableModif}>
          <i className='fas fa-edit'></i>
        </li>
        <li className='sup' onClick={delEquipment}>
          <i className='fas fa-trash-alt'></i>
        </li>
      </ul>
    </div>
  )
}

export default EquipmentCard
