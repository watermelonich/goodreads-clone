import './SignIn.css';
import React from "react";

const SignIn = () => {

    // return JSX/HTML
    return (
        <div className="signIn flexbox-container">

            <h2>Sign-In</h2>

            <form action="" method="post" className="signInForm">

                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" required />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" name="password" required />
                </div>

                <button type='submit' id='signInButton'>Submit</button>

            </form>

            <div>
                <p>Not a member yet? <a href="./CreateAccount">Create an account</a></p>
            </div>

        </div>
    )
};

export default SignIn;