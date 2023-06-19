import { Route, Routes, BrowserRouter, Navigate as Redirect } from 'react-router-dom'
import { Login } from '../pages/login/login'
import { AuthProvider } from '../shared/contexts/Context'

export const Rotas = () => {


    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path='*' Component={() => <Redirect to="/" />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>

    )
}