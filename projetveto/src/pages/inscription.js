import React from 'react';
import { Link } from 'react-router-dom';


export default function Inscription() {
    return (
        <div className='container p-5'><h1 className='display-2 text-light'>Inscription</h1>
            <form>

                <div>
                    <input className="form-control" type="text" placeholder='nom' name='nom' id='nom'required/><br/>
                    <input className="form-control" type="text" placeholder='prenom' name='prenom' id='prenom' required/><br/>
                    <input className="form-control" type="tel" placeholder='telephone' name='tel' id='tel' required/><br/>
                    <input className="form-control" type="email" placeholder='email' name='email' id="signUpEmail" required/><br/>
                    <input className="form-control" type="password" placeholder='password' name='pwd' id="signUpPwd" required/><br/>
                    <input className="form-control" type="password" placeholder='confirmation password' name='confpwd' id="confpwd" required/>

                    <p className='text-danger mt-1'></p>
                </div><br />

                <button className='btn btn-primary ms-2'><Link to="/">Connexion</Link></button>&nbsp;
                <button className='btn btn-primary ms-2' type="submit">S'inscrire</button>



            </form>
        </div>
    )
}
