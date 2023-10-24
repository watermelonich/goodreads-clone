import React from "react";
import NavBar from "./NavBar";

// Header Component: to be rendered across all views/webpages
const Header = () => {

    // return (JSX/HTML)
    return (
        <header className="flexbox-container">

            <h3>Library</h3>

            <div className="search-bar">
            <input type="text" placeholder="Search here" name="query" />
            <button type="submit">Submit</button>
            </div>

            <NavBar links={
                [
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
                ]
                } />
        </header>
    );
};


export default Header;