import { Route, Routes, BrowserRouter, Navigate as Redirect, Navigate } from 'react-router-dom'
import { Login } from '../pages/login/login'
import { AuthContext, AuthProvider } from '../shared/contexts/Context'
import { Home } from '../pages/home/home'
import { useContext } from 'react'

export const Rotas = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className='loand'>Carregando...</div>;
        }

        if (!authenticated) {
            return <Navigate to="/" />
        } else {
            return children;
        }
    };

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path='/home' element={<Private><Home /></Private>} />
                    <Route path='*' Component={() => <Redirect to="/" />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>

    )
}