import React, { useEffect, useState } from 'react'

const WORDS: string[] = [
  "preparing",
  "presentation",
  "presentational",
  "minute",
  "again",
  "entangle",
  "disantangle",
  "remembering",
  "remote",
  "failure",
  "answer",
  "commitment",
  "struggeling",
]

export const WordsPerMinute = () => {
  const randomWord = WORDS[(Math.random() * WORDS.length) | 0]
  const [word, setWord] = useState(()=> randomWord)
  const [characterCount, setCharacterCount] = useState(0)
  const [buffer, setBuffer] = useState("")
  const [time, setTime] = useState(0)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (buffer === word) {
      setWord(WORDS[Math.random() * WORDS.length | 0])
      setCharacterCount((characterCount) => characterCount + word.length)
    }
    setBuffer("")

  }

  function handleInit() {
    setTime(20);
    setCharacterCount(0);
    setWord(randomWord)
  }

  useEffect(()=>{
    if (time !== 0) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);

      return () => clearTimeout(timeout);
    }
  }, [time])

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 12, textAlign: "center"}}>
      <h2>Characters Typed: {characterCount}</h2>
      {
      Boolean(time) ? 
        <>
          <h1 style={{fontSize: 48}}>{word}</h1>
          <h3>Remaining time: <span style={{ color: time < 10 ? 'red' : ''}}>{time}</span></h3>
          <form onSubmit={handleSubmit}>
            <input type="text" autoFocus onChange={(e)=>setBuffer(e.target.value)} value={buffer}/>
            <button className='submit' type='submit'>Submit</button>
          </form>
        </>
      : <button className='playButton' onClick={handleInit}>Play</button>
      }
    </div>
  )
}
