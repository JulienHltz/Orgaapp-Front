import { NavLink } from "react-router-dom";

const Nav = () => {

    const navItems = [
        {
            "clsName": "fas fa-home",
            "pathName": "/connexion"
        },
        {
            "clsName": "fas fa-calendar-alt",
            "pathName": "/evenements"
        },
        {
            "clsName": "fas fa-microphone-alt",
            "pathName": "/materiel"
        },
        {
            "clsName": "fas fa-drum",
            "pathName": "/groupes"
        },
        {
            "clsName":"fas fa-users",
            "pathName": "/utilisateurs"
        }
    ];

    const ItemsComponents = ({ cls, pathName }) => <li><NavLink to={pathName} className={({ isActive }) => (isActive ? "link-active" : " ")}><i className={cls}></i></NavLink></li>;

    return (
        <nav>
            <ul>
                {
                    navItems.map(({clsName,pathName}, idx) => <ItemsComponents cls={clsName} pathName={pathName} key={idx}></ItemsComponents>)
                }
            </ul>
        </nav>
    )
};


export default Nav;