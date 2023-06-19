import React, { createContext, useContext } from 'react'
import '../app/App.css';
import { Auth } from './pages/login/login'
import { Home } from './pages/home/home';
import { Rotas } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {


    return (
        <Rotas />
    )
}