import React from 'react';
import { Link } from 'react-router-dom';


export default function Inscription() {
    return (
        <div className='container p-5'><h1 className='display-2 text-light'>Inscription</h1>
            <form>

                <div>
                    <input className="form-control" type="text" placeholder='nom' required/><br/>
                    <input className="form-control" type="text" placeholder='prenom' required/><br/>
                    <input className="form-control" type="tel" placeholder='telephone' required/><br/>
                    <input className="form-control" type="email" placeholder='email' required/><br/>
                    <input className="form-control" type="password" placeholder='password' required/>
                </div><br />

                <button className='btn btn-primary ms-2'><Link to="/">Connexion</Link></button>&nbsp;
                <button className='btn btn-primary ms-2' type="submit">S'inscrire</button>



            </form>
        </div>
    )
}
