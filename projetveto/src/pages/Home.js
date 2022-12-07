import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container p-5'><h1 className='display-3 text-light'>Connexion</h1>

            <form action="" method="post">
                <div>
                    <input className="form-control" name="email" type="email" placeholder='email' id="signUpEmail" required/>
                </div><br/>
                <div>
                    <input className="form-control" name="pwd" type="password" placeholder='password' id="signUpPwd" required/>
                </div><br />

                <button className='btn btn-primary ms-2' type="submit">Connexion</button>&nbsp;
                <button className='btn btn-primary ms-2'><Link to="/inscription">Inscription</Link></button>
            </form>
        </div>
    );

};

export default Home;
