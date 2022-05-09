import { useSelector } from 'react-redux'
import { RootState } from '../modules'
import styled from 'styled-components'

// View

type CounterProps = {
  selecting: (e: React.MouseEvent<HTMLButtonElement>) => void
}

type Onclick = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function QuizView({ selecting }: CounterProps) {
  const quiz = useSelector((state: RootState) => state.counter.quizList[state.counter.currentIndex])

  return (
    <>
      <Article>
        <Header>{quiz.text}</Header>
        {quiz.selections.map((sel, idx) => {
          return (
            <ButtonContainer key={idx} onClick={selecting}>
              {sel}
            </ButtonContainer>
          )
        })}
      </Article>
    </>
  )
}

const ButtonContainer = styled.button<Onclick>`
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
  margin-bottom: 100px;
  margin-left: 20px;
  position: relative;
  text-align: center;
  /* left: 50px; */
  top: -50px;
  font-size: 25px;
`
const Header = styled.header`
  margin-bottom: 10%;
  position: relative;
  font-size: 50px;
  top: 100px;
  text-align: center;
`

const Article = styled.article`
  width: 100%;
  margin-top: 10%;
  background-color: gray;
`
