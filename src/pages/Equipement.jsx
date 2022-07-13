import { NavLink } from 'react-router-dom'

const Equipement = () => {
  return (
    <>
      <div className='container'>
        <NavLink to='/nouvelle-category'>
          <p>Ajouter une catégorie de matériel</p>
        </NavLink>
        <NavLink to='/nouvel-etat'>
          <p>Ajouter un état</p>
        </NavLink>

        <div className='card'>
          <h4>Nom Matos</h4>
          <div className='etat'></div>
          <div className='created-date'>
            <p>Créé le 05/05/2006</p>
          </div>
          <div className='modificated-date'>
            <p>Modifié le 04/11/2013</p>
          </div>
          <ul className='mod-sup'>
            <li className='mod'>
              <i className='fas fa-edit'></i>
            </li>
            <li className='sup'>
              <i className='fas fa-trash-alt'></i>
            </li>
          </ul>
        </div>
        <div className='card'>
          <h4>Nom Matos</h4>
          <div className='etat'></div>
          <div className='created-date'>
            <p>Créé le 15/07/2019</p>
          </div>
          <div className='modificated-date'>
            <p>Modifié le 06/12/2020</p>
          </div>
          <ul className='mod-sup'>
            <li className='mod'>
              <i className='fas fa-edit'></i>
            </li>
            <li className='sup'>
              <i className='fas fa-trash-alt'></i>
            </li>
          </ul>
        </div>
        <NavLink to='/nouveau-matos'>
          <i className='fas fa-plus-circle fa-3x add'></i>
        </NavLink>
      </div>
    </>
  )
}

export default Equipement
