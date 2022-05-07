import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home'
import QuizResult from './pages/QuizResult'
import QuizSession from './pages/QuizSession'
import WordList from './pages/WordList'

function App() {
  return (
    <Section>
      <h1>다풀자 영단어</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quiz' element={<QuizSession />} />
        <Route path='wordlist' element={<WordList />} />
        <Route path='quizresult' element={<QuizResult />} />
      </Routes>
    </Section>
  )
}

const Section = styled.section`
  text-align: center;
  h1 {
    position: relative;
    top: 100px;
    font-size: 50px;
  }
`

export default App
