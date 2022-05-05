import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import QuizSession from './QuizSession'
import WordList from './WordList'

function App() {
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>다풀자 영단어</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quiz' element={<QuizSession />} />
        <Route path='wordlist' element={<WordList />} />
      </Routes>
    </section>
  )
}

export default App
