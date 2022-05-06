import { useSelector } from 'react-redux'
import { RootState } from '../modules'

// View

type CounterProps = {
  selecting: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function QuizView({ selecting }: CounterProps) {
  const quiz = useSelector((state: RootState) => state.counter.quizList[state.counter.currentIndex])

  const articleStyle = {
    margin: '16px',
    padding: '8px',
    background: '#efefef'
  }
  // const buttonStyle = {
  //   display: 'flex',
  //   flexdirection: 'column'
  // }

  return (
    <article style={articleStyle}>
      <header>{quiz.text}</header>
      {quiz.selections.map((sel, idx) => {
        return (
          <button key={idx} onClick={selecting} className='select'>
            {sel}
          </button>
        )
      })}
    </article>
  )
}
