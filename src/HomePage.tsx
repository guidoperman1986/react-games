import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (    
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "400px", justifyContent: "space-evenly"}}>
        <h1>Games</h1>
        <div>
            <Link className='link' to="/memotest">Memotest</Link>
            <Link className='link' to="/wpm">Words per Minute</Link>
            <Link className='link' to="/pokemon">Pokemon</Link>    
        </div>
    </div>
  )
}
