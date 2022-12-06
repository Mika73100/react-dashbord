import React from 'react';
import {Link} from 'react-router-dom';


export default function Inscription() {
  return (
    <div>
    <h1>Inscription</h1>
      <form>

        <div>
          <input type="text" placeholder='nom'/><br/>
          <input type="text" placeholder='prenom'/><br/>
          <input type="tel" placeholder='telephone'/><br/>
          <input type="email" placeholder='email'/><br/>
          <input type="password" placeholder='password'/> 
        </div>

        <button type="submit">S'inscrire</button><br/>
        <button><Link to="/">Connexion</Link></button>
      </form>
    </div>
  )
}
