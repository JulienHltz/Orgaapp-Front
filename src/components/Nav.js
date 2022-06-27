import React from "react";

const Nav = () => {

    const navItems = [
        "fas fa-home",
        "fas fa-calendar-alt",
        "fas fa-microphone-alt",
        "fas fa-drum",
        "fas fa-users"
    ];

    const ItemsComponents = ({ cls }) => <li><i className={cls}></i></li>;

    return (
        <nav>
            <ul>
                {
                    navItems.map((classAttribute, idx) => <ItemsComponents cls={classAttribute} key={idx}></ItemsComponents>)
                }
            </ul>
        </nav>
    )
};


export default Nav;