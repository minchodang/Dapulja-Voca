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

  // const articleStyle = {
  //   margin: '16px',
  //   padding: '8px',
  //   background: '#efefef'
  // }
  // const buttonStyle = {
  //   display: 'flex',
  //   flexdirection: 'column'
  // }

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
  margin-bottom: 100px;
  /* position: relative; */
  margin-left: 20px;
  /* justify-content: space-around; */
  top: 50px;
`
const Header = styled.header`
  margin-bottom: 10%;
  position: relative;
  font-size: 50px;
  top: 120px;
`

const Article = styled.article`
  width: 100%;
  margin-top: 10%;
  background-color: gray;
`
