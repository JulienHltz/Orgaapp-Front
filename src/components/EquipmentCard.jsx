const EquipmentCard = ({ equipment, onClick, index, modif }) => {
  const delEquipment = () => {
    onClick(equipment['@id'], index)
  }

  const enableModif = () => {
    modif(index)
  }

  return (
    <>
      <div className='card'>
        <h4>{equipment.name}</h4>
        <div className='etat'>
          <p>{equipment.healths}</p>
        </div>
        <div className='category'>
          <h6>Catégorie : {equipment.categorie['name']}</h6>
        </div>
        <div className='inStock'>
          {equipment.inStock === true && <h6>En stock</h6>}
          {equipment.inStock === false && <h6>A louer</h6>}
        </div>

        {/* <div className='created-date'>
        <p>{equipment.createdAt}</p>
      </div>
      <div className='modificated-date'>
        <p>{equipment.modificatedAt}</p>
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
    </>
  )
}

export default EquipmentCard
