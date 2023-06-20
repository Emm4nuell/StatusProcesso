import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/contexts/Context"
import { getUsers } from "../../shared/services/api/ApiConfig";

export const Home = () => {

    const { authenticated, logout } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        (async () => {
            const response = await getUsers();
            setUsers(response.data);
            setLoading(false);
        })();
    }, [])

    const handleLogout = () => {
        logout();
    }

    if(loading){
        return <div className="loading">Carregando dados...</div>
    }

    return (
        <div className="home">
            minha pagina
            <h1>Página Home</h1>
            <button onClick={handleLogout}>Sair</button>
            <ul>
                {users.map((user) =>(
                    <li key={user.cpf}>
                        {user.cpf} - {user.cpf}
                    </li>
                ))}
            </ul>
        </div>
    )
}