import { Route, Routes } from 'react-router-dom'
import { Memotest } from './MemoTest'
import { Pokemon } from './Pokemon'
import { WordsPerMinute } from './WordsPerMinute'
import "./index.css"
import { HomePage } from './HomePage'

function App() {

  return (
    <Routes>
      <Route element={<HomePage />}       path="/" />
      <Route element={<Memotest />}       path="/memotest" />
      <Route element={<Pokemon />}        path="/pokemon" />
      <Route element={<WordsPerMinute />} path="/wpm" />
    </Routes>
  )
}

export default App
