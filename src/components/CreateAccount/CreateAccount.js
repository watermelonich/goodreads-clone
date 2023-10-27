import './CreateAccount.css';
import React from "react";
import { Link } from 'react-router-dom';

// Create an Account page
const CreateAccount = () => {

    // return (JSX/HTML)
    return (
        <div className="createAccount flexbox-container">

            <h2>Create an Account</h2>


            <form action="" method="post" className="createAccountForm">
                <div>
                    <label htmlFor="name">Your name</label>
                    <input id="name" type="text" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" name="password" required />
                </div>

                <button type='submit' id='createAccountButton'>Submit</button>
            </form>

            <div>
                <p>Already a member? <Link to="/SignIn">Sign in</Link></p>
            </div>
        </div>
    );
};

export default CreateAccount;