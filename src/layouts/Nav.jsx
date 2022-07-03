import { NavLink } from "react-router-dom";

const Nav = () => {

    const navItems = [
        {
            "clsName": "fas fa-home",
            "pathName": "/",
            "hideWhenLogged": false
        },
        {
            "clsName": "fas fa-key",
            "pathName": "/connexion",
            "hideWhenLogged": true
        },
        {
            "clsName": "fas fa-calendar-alt",
            "pathName": "/evenements",
            "hideWhenLogged": false
        },
        {
            "clsName": "fas fa-microphone-alt",
            "pathName": "/materiel",
            "hideWhenLogged": false
        },
        {
            "clsName": "fas fa-drum",
            "pathName": "/groupes",
            "hideWhenLogged": false
        },
        {
            "clsName":"fas fa-users",
            "pathName": "/utilisateurs",
            "hideWhenLogged": false
        }
    ];

    const ItemsComponents = ({ cls, pathName, hideWhenLogged}) =>  {
        let tmp = ((hideWhenLogged & window.localStorage.getItem('token') != null) ?
         "" 
         :
           <li><NavLink to={pathName} className={({ isActive }) => (isActive ? "link-active" : " ")}><i className={cls}></i></NavLink></li>)
    
    return tmp 
    }

    return (
        <nav>
            <ul>
                {
                    navItems.map(({clsName,pathName, hideWhenLogged}, idx) => ( <ItemsComponents cls={clsName} pathName={pathName} hideWhenLogged={hideWhenLogged} key={idx}></ItemsComponents>))
                }
            </ul>
        </nav>
    )
};


export default Nav;