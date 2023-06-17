import React, { createContext, useContext } from 'react'
import '../app/App.css';
import { Auth } from './pages/login/auth'
import { Home } from './pages/home/home';
import { Rotas } from './routes';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {


    return (
            <Rotas />
    )
}