import React, { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/card/Card";
import { getPokemon } from "./services/pokeService";

function App() {
    const [load, setLoad] = useState(true);
    const [poke, setPokemon] = useState([]);

    const arr = [];
    useEffect(() => {
      getPokemon(150).then((pokemones) =>{
        pokemones.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((pokemons) => arr.push(pokemons))
            .catch((err) => console.error(err));
            setPokemon(arr);
        });
      });
    }, [])
    
    setTimeout(() =>{
      setLoad(false)
    },1000)
  return (
    <div className="pokegallery">
      {
        load ? 
        (<p>Loading</p>)
        :
        (
          <>
            <h1>Listado Pokemons</h1>
            <Card arr={poke}/>
          </>
        )
      }
    </div>
  );
}
export default App;
