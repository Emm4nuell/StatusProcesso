import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null);

    const login = (usuario, senha) => {
        setUser({id: '123', usuario})
    };

    const logout = () => {
        console.log("logout");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}