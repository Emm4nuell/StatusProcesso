import React, { useState, useContext } from "react";
import './auth.css'
import TextField from '@mui/material/TextField';
import LogoReact from '../../shared/components/img/react.png'
import Logo from '../../shared/components/img/logo.png'



export const Auth = () => {

    const handleEntrar = () =>{
        console.log("Botão acionado!")
    }


    return (
        <div className="auth">
            <div className="imagem">
                <img src={LogoReact} />
            </div>
            <div className="acesso">
                <div className="img">
                    <img src={Logo} alt="logo" />
                </div>
                <form>
                    <TextField id="outlined-basic" name="cpf" label="Digite seu E-mail ou cpf" variant="filled" />
                    <TextField id="outlined-basic" name="senha" type="password" label="Digite sua senha" variant="filled" />

                <div className="esqueceuSenha">
                    <div className="checkbox">
                        <input type="checkbox" />
                        <span>Mostrar</span>
                    </div>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <div className="botao">
                    <button type="button" onClick={handleEntrar}>Entrar</button>
                </div>
                </form>
            </div>
        </div>
    )
}