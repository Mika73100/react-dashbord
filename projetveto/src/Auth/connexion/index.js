import React from 'react';
import {Link} from 'react-router-dom';

export default function Connexion() {
  return (
    <div><h1>Connexion</h1>

    <form action="" method="post">
        <div>
            <input type="email" placeholder='email'/>
        </div>
        <div>
            <input type="password" placeholder='password'/>
        </div>

        <button type="submit">Se connecter</button><br/>

        <button><Link to="/inscription">Inscription</Link></button>
    </form>
    </div>
  )
}
