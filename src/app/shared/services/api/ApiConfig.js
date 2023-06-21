import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8080/acompanhamento-processo/'
});



export const createSession = async (cpf, senha, token) => {
    return api.post("/auth", { cpf, senha })
        .then(response => {

        })
        .catch(error => {
            console.log(error.response.data.message)
        });
}

//Listar todos os dados do usuario
export const getUsers = async (token) => {
    return api.get("")
        .then(response => {
        })
        .catch(error => {
            console.log(error)
        });
}