import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { api, getUsers } from '../services/api/ApiConfig'

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    //ficara carregando as informações ate finalizar a requisição
    const [loading, setLoading] = useState(true)

    //Sempre que der update na pagina ela vai carregas o seguintes dados
    useEffect(() => {
        const recoverUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (recoverUser && token) {
            setUser(JSON.parse(recoverUser))
            api.defaults.headers.Authorization = "Bearer " + JSON.parse(token);
            console.log(api.defaults.headers.Authorization = "Bearer " + JSON.parse(token));
        }
        setLoading(false);

    }, [])

    const login = (usuario, senha, token) => {
        //JSON.strigify vai converter em string
        localStorage.setItem("user", JSON.stringify({ usuario, senha }));
        localStorage.setItem("token", JSON.stringify(token));

        api.defaults.headers.Authorization = "Bearer " + token;
        console.log("Token ao logar: " + token)
        setUser({ usuario, senha });
        navigate("home")


    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/")
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}