import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {

    // destructure props for navbar hyperlinks
    const { links } = props;

    // return (JSX/HTML)
    return (
        <nav>
            {links.map((link, index) => {

                // return a Link/anchor for every element
                return (
                    <Link key={index} to={link.url}>{link.name}</Link>
                );
            })}
        </nav>
    );
};

export default NavBar;