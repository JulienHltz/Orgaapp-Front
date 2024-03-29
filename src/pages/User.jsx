import { NavLink } from "react-router-dom";

import "./_user.scss";

const User = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <h4>Nom User</h4>
          <ul className="mod-sup">
            <li className="mod">
              <i class="fas fa-edit"></i>
            </li>
            <li className="sup">
              <i class="fas fa-trash-alt"></i>
            </li>
          </ul>
        </div>
        <div className="card">
          <h4>Nom User</h4>
          <ul className="mod-sup">
            <li className="mod">
              <i class="fas fa-edit"></i>
            </li>
            <li className="sup">
              <i class="fas fa-trash-alt"></i>
            </li>
          </ul>
        </div>
        <NavLink to="/nouvel-utilisateur">
          <i class="fas fa-plus-circle fa-3x add"></i>
        </NavLink>
      </div>
    </>
  );
};

export default User;
