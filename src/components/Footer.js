import React from "react";
import NavBar from "./NavBar";

const Footer = () => {

    // return (JSX/HTML)
    return (
        <footer className="flexbox-container">

            <h3>Library</h3>

            <NavBar links={[
                {
                    name: 'Home',
                    url: '/'
                },
                {
                    name: 'Books',
                    url: '/Books'
                },
                {
                    name: 'MyBooks',
                    url: '/MyBooks'
                },
                {
                    name: 'About',
                    url: '/About'
                }
            ]} />
        </footer>
    );
};

export default Footer;