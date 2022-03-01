import React, { useState } from "react";

export const Card = ({ arr }) => {
  const [poke, setPoke] = useState(arr)
  return (
    <>
      {poke.map((img, i) => (
        <div id={img.id} key={img.id}>
          <div className="card">
            <img src={img.sprites.front_default} alt="pokemon" />
            <div>
              <h5>{img.name}</h5>
              <ul>
                <li>Tipos:</li>
                {
                  img.types.map((tipe, index) =>{
                  return (
                    <li key={index}>{tipe.type.name}</li>
                  )
                }
                )
                }
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  )
};
