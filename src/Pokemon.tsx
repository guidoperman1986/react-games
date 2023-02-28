import React, { useEffect, useState } from 'react'

let POKEMONS: {name: string, url: string}[] = []

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement
}

const getPokemons = async () => {
  try {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50');
    const pokemons = await resp.json();
    return pokemons.results;

  } catch (error) {
    console.log(error);
  }
}

export const Pokemon = () => {  
  const [hasWon, toggleWon] = useState(false)
  const [match, setMatch] = useState(1)

  useEffect(() => {    
    getPokemons().then(pkms=>{
      POKEMONS = pkms;
      // setMatch(Math.floor(Math.random() * POKEMONS.length))
    })
  }, [])
  

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();

    const { pokemon } = event.currentTarget;
    if (pokemon.value.toLowerCase() === POKEMONS[match].name) {
      toggleWon(true);
      alert("You won!!!")
    } else {
      alert("Wrong answer!")
      pokemon.value = "";
    }

  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <img 
        width={312} 
        height={312} 
        style={{ imageRendering: "pixelated", filter: hasWon ? "" : "brightness(0) invert(1)" }} 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${match + 1}.png`} alt="" 
      />

      {
        hasWon 
          ? <button style={{height: "40px", width: "50%"}} onClick={()=>(toggleWon(false), setMatch(Math.floor(Math.random() * POKEMONS.length)))}>Play</button>
          : <form action="" onSubmit={handleSubmit} style={{width: "50%", display: "flex", justifyContent: "space-around"}}>
              <input type="text" name="pokemon" />
              <button type="submit">Submit</button>
            </form>
      }
    </div>
  )
}
