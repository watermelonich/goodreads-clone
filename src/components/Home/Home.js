import React from "react";
import './Home.css';
import ReadingLogo from '../../assets/gr.jpg';
import TAR from '../../assets/tar.jpg';
import KATS from '../../assets/kats.jpg';
import PHM from '../../assets/phm.jpg';

/**
 * 
 * Featured list of books
 *  -> list is currently static, no need to re-render
 */
const featured = [
    {
        name: 'A Court of Thorns and Roses',
        img: TAR
    },
    {
        name: 'Klara and the Sun',
        img: KATS
    },
    {
        name: 'Project Hail Mary',
        img: PHM
    }

    ];

const Home = () => {

    // return a component (JSX/HTML)
    return (
    <div id="home">

        <div className="home_top flexbox_container">

            <div className="intro">
                <h2>Open Doors to New Worlds<br/>
                Discover Your Next Adventure</h2>
                <button>Browse Books</button>
            </div>

            <div className="logo">
                <img src={ReadingLogo} alt="website logo" />
            </div>
        </div>

        <div className="featured flexbox_container">

            <div className="featured_title">
                <h3>Featured</h3>
            </div>


            <div className="featured_books flexbox_container">
                {featured.map((book, index) => {

                    // return an element for each Object in the Array
                    return (
                        <div key={index} className="flexbox_container">
                            <img src={book.img} alt={book.name} />
                            <p>{book.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>


    </div>
    );
};

export default Home;