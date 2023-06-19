import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8080/acompanhamento-processo/'
});
        


export const createSession = async(cpf, senha) =>{
    console.log("Api: ", {cpf, senha})
    return api.post("/auth", {cpf, senha});
}