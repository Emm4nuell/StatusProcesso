import { Route, Routes, BrowserRouter, Navigate as Redirect } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { Auth } from '../pages/login/auth'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path='*' Component={() => <Redirect to="/" />} />
            </Routes>
        </BrowserRouter>

    )
}