import React, { useEffect, useState } from 'react'
import "./index.css";

const IMAGES = [
  "https://icongr.am/devicon/android-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/apple-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/github-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/ie10-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor"
]
  .flatMap(image => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5)

export const Memotest = () => {;
  const [playerNumber, setPlayerNumber] = useState<number>(1);
  const [player1, setPlayer1]   = useState<{name: string, points: number}>({name: '', points: 0});
  const [player2, setPlayer2]   = useState<{name: string, points: number}>({name: '', points: 0});
  const [started, setStarted]   = useState<boolean>(false);
  const [guessed, setGuessed]   = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split('|')[1] === selected[1].split('|')[1]) {
        setGuessed((guessed) => guessed.concat(selected));
        
        if (playerNumber === 1) {
          setPlayer1((player) => ({...player, points: player.points++}) );
        } else {
          setPlayer2((player) => ({...player, points: player.points++}) )
        }

        setPlayerNumber(()=> playerNumber === 1 ? 2 : 1)
        
      }

      setTimeout(() => {
        setSelected([])        
      }, 1000);
    }  
  }, [selected])

  useEffect(()=> {
    if (guessed.length === IMAGES.length) {
      player1 > player2 ? alert(`${player1} wins`) : alert(`${player2} wins`)
      location.reload()
    }
  }, [guessed])  

  return (
    <>
      <div className='inputs'>
        <input 
          type="text" 
          disabled={started} 
          placeholder='Player 1' 
          onKeyUp={(e) => setPlayer1({name: (e.target as HTMLInputElement).value, points: 0})}          
        />
        <div>{ player1.points }</div>

        <input 
          type="text" 
          disabled={started} 
          placeholder='Player 2' 
          onKeyUp={(e) => setPlayer2({name: (e.target as HTMLInputElement).value, points: 0})}          
        />        
        <div>{ player2.points }</div>

        <button onClick={() => (!started && player1.name !== "" && player2.name !== "") && setStarted(true)}>
          Comenzar !
        </button>
      </div>
      
      <ul 
        style={{
          marginTop: "10px",
          display: "grid", 
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))" 
        }}
      >
        {
          IMAGES.map((image) => {
            const [,url] = image.split('|');
            
            return( 

                  <li 
                    onClick={()=> started && selected.length < 2 && setSelected((selected)=>selected.concat(image))}
                    style={{
                      padding: 12, 
                      border: "1px solid #666", 
                      borderRadius: 12, 
                      cursor: "pointer"
                    }} 
                    key={image}>
                    <img src={selected.includes(image) || guessed.includes(image) 
                        ? url
                        :  "https://icongr.am/clarity/search.svg?size=128&color=currentColor"
                    } alt="" />
                  </li>

            )
          })
        }
      </ul>
    </>
  )
}
