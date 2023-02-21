import { Route, Routes } from 'react-router-dom'
import { Memotest } from './MemoTest'
import { Pokemon } from './Pokemon'
import { WordsPerMinute } from './WordsPerMinute'
import "./index.css"

function App() {

  return (
    <Routes>
      <Route element={<Memotest />}       path="/memotest" />
      <Route element={<Pokemon />}        path="/pokemon" />
      <Route element={<WordsPerMinute />} path="/wpm" />
    </Routes>
  )
}

export default App
