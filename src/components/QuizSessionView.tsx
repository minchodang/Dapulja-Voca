import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import QuizView from './QuizView'
import { RootState } from '../modules'

type CounterProps = {
  // correctCount: number
  // isCompleted: boolean
  // inCorrectCount: number
  selecting: (e: React.MouseEvent<HTMLButtonElement>) => void
}

type Onclick = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// View
export default function QuizSessionView({ selecting }: CounterProps) {
  const navigate = useNavigate()

  const correctCount = useSelector((state: RootState) => state.counter.correctCount)
  const isCompleted = useSelector((state: RootState) => state.counter.isCompleted)
  const inCorrectCount = useSelector((state: RootState) => state.counter.inCorrectCount)
  function go(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement
    if (target.innerText === '홈으로') {
      navigate('/')
    } else {
      navigate('/quizresult')
    }
  }
  return (
    <Section>
      <StatusContainer>
        <div>완료 여부: {isCompleted ? '완료' : '미완료'}</div>
        <div>맞은 개수 {correctCount}</div>
        <div>틀린 개수 {inCorrectCount}</div>
      </StatusContainer>
      {isCompleted ? (
        <Buttons>
          <Button1 onClick={go}>홈으로</Button1>
          <Button2 onClick={go}>결과창으로</Button2>
        </Buttons>
      ) : (
        <QuizView selecting={selecting} />
      )}
    </Section>
  )
}

const Buttons = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
`

const Button1 = styled.button<Onclick>`
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 30px;
  font-family: sans-serif;
  transition: all 0.4s;
  margin-right: 1%;
  font-size: 30px;
`
const Button2 = styled.button<Onclick>`
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 30px;
  font-family: sans-serif;
  transition: all 0.4s;
  margin-left: 1%;
  font-size: 30px;
`

const Section = styled.section`
  /* position: relative;
  top: 200px; */
  font-size: 30px;
`
const StatusContainer = styled.div`
  position: relative;
  top: 130px;
`
