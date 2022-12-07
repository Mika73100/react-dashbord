import React from 'react';
import { Link } from 'react-router-dom';
import { userContext, useRef, useState } from 'react';


export default function Inscription() {

    const inputs = useRef([])
    const addinputs = e => {
        //ici je crée une fonction qui me permet de voir si mon élément est deja dans le tableau ou pas.
        if(e && !inputs.current.includes(e)){
            inputs.current.push(e)
        }
    }

    //ici je crée le handeleform pour mon formulaire
    const handleForm = e => {
        e.preventDefault()
    }


    return (
        <>
        <div className='container p-5'>
            <h1 className='display-2 text-light'>Inscription</h1>
                <form onSubmit={ handleForm }>

                    <input ref={addinputs} className="form-control" type="text" placeholder='nom' name='nom' id='nom'/><br/>
                    <input ref={addinputs} className="form-control" type="text" placeholder='prenom' name='prenom' id='prenom'/><br/>
                    <input ref={addinputs} className="form-control" type="tel" placeholder='telephone' name='tel' id='tel' /><br/>
                    <input ref={addinputs} className="form-control" type="email" placeholder='email' name='email' id="signUpEmail" /><br/>
                    <input ref={addinputs} className="form-control" type="password" placeholder='password' name='pwd' id="signUpPwd" /><br/>
                    <input ref={addinputs} className="form-control" type="password" placeholder='confirmation password' name='confpwd' id="confpwd" />

                    <p className='text-danger mt-1'></p>
                <br/>

                <button className='btn btn-primary ms-2'><Link to="/">Connexion</Link></button>&nbsp;
                <button className='btn btn-primary ms-2' type="submit">S'inscrire</button>

                </form>
            </div>
        </>
    )
}