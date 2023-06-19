import React, { useState, useContext, useEffect } from "react";
import './login.css'
import TextField from '@mui/material/TextField';
import LogoReact from '../../shared/components/img/react.png'
import Logo from '../../shared/components/img/logo.png'
import { AuthContext, Context, ContextProvider } from "../../shared/contexts/Context";
import { createSession } from "../../shared/services/api/ApiConfig";
import axios from 'axios'



export const Login = () => {


    const [user, setUser] = useState({
        cpf: "",
        senha: ""
    });

    const {authenticated, login} = useContext(AuthContext);

    const acessar = async (e) => {
        e.preventDefault();
        const response = await createSession(user.cpf, user.senha);
        console.log("Token: ", response.data);
        login(user.cpf, user.senha)
    }

    return (
        <div className="auth">
            <div className="imagem">
                <img src={LogoReact} />
            </div>
            <div className="acesso">
                <div className="img">
                    <p>{String(authenticated)}</p>
                    <img src={Logo} alt="logo" />
                </div>
                <form>
                    <TextField id="outlined-basic" name="cpf" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} value={user.cpf} label="Digite seu E-mail ou cpf" variant="filled" />
                    <TextField id="outlined-basic" name="senha" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} value={user.senha} type="password" label="Digite sua senha" variant="filled" />

                    <div className="esqueceuSenha">
                        <div className="checkbox">
                            <input type="checkbox" />
                            <span>Mostrar</span>
                        </div>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    <div className="botao">
                        <button type="button" onClick={acessar}>Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}