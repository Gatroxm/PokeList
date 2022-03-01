import axios from "axios";
export const getPokemon = (limit = 50) => {
    return axios
        .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
        .then((response) => response.data.results)
        .catch((err) => { console.log(err) })
};