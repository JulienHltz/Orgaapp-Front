import { NavLink } from 'react-router-dom'

const Nav = () => {
  const navItems = [
    {
      clsName: 'fas fa-home',
      pathName: '/',
      hideWhenLogged: false,
      hideWhenNotLogged: false
    },
    {
      clsName: 'fas fa-key',
      pathName: '/connexion',
      hideWhenLogged: true,
      hideWhenNotLogged: false
    },
    {
      clsName: 'fas fa-calendar-alt',
      pathName: '/evenements',
      hideWhenLogged: false,
      hideWhenNotLogged: true
    },
    {
      clsName: 'fas fa-microphone-alt',
      pathName: '/materiel',
      hideWhenLogged: false,
      hideWhenNotLogged: true
    },
    {
      clsName: 'fas fa-drum',
      pathName: '/groupes',
      hideWhenLogged: false,
      hideWhenNotLogged: true
    },
    {
      clsName: 'fas fa-users',
      pathName: '/utilisateurs',
      hideWhenLogged: false,
      hideWhenNotLogged: true
    }
  ]

  const ItemsComponents = ({
    cls,
    pathName,
    hideWhenLogged,
    hideWhenNotLogged
  }) => {
    let tmp =
      hideWhenLogged & (window.localStorage.getItem('token') != null) ||
      hideWhenNotLogged & (window.localStorage.getItem('token') == null) ? (
        ''
      ) : (
        <li>
          <NavLink
            to={pathName}
            className={({ isActive }) => (isActive ? 'link-active' : ' ')}
          >
            <i className={cls}></i>
          </NavLink>
        </li>
      )

    return tmp
  }

  return (
    <nav>
      <ul>
        {navItems.map(
          ({ clsName, pathName, hideWhenLogged, hideWhenNotLogged }, idx) => (
            <ItemsComponents
              cls={clsName}
              pathName={pathName}
              hideWhenLogged={hideWhenLogged}
              hideWhenNotLogged={hideWhenNotLogged}
              key={idx}
            ></ItemsComponents>
          )
        )}
      </ul>
    </nav>
  )
}

export default Nav
