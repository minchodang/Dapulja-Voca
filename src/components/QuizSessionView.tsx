import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import QuizView from './QuizView'

type CounterProps = {
  correctCount: number
  isCompleted: boolean
  inCorrectCount: number
  selecting: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// View
export default function QuizSessionView({
  correctCount,
  isCompleted,
  inCorrectCount,
  selecting
}: CounterProps) {
  const navigate = useNavigate()

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
        <>
          <button onClick={go}>홈으로</button>
          <button onClick={go}>결과창으로</button>
        </>
      ) : (
        <QuizView selecting={selecting} />
      )}
    </Section>
  )
}

const Section = styled.section`
  /* position: relative;
  top: 200px; */
  font-size: 30px;
`
const StatusContainer = styled.div`
  position: relative;
  top: 150px;
`
