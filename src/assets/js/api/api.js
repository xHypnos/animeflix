import axios from "axios";

export const api = axios.create({
    baseURL: "/db.json"
})

export const buscar = async (url, setData) =>{
    const response = await api.get(url)
    setData(response.data)
}