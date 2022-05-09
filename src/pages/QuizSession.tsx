import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules'
import { useEffect, useState } from 'react'
import { correct, final, incorrect } from '../modules/counter'
import QuizSessionView from '../components/QuizSessionView'
import styled from 'styled-components'

type State = {}

function QuizSession() {
  const quizList = useSelector((state: RootState) => state.counter.quizList)
  const currentIndex = useSelector((state: RootState) => state.counter.currentIndex)
  const quiz = useSelector((state: RootState) => state.counter.quizList[state.counter.currentIndex])
  const dispatch = useDispatch()
  const [initalLoaded, setInitalLoaded] = useState(false)

  //디스패치 함수 설정.
  const selecting = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement
    const selected = target.innerText
    if (selected === quiz.answer) {
      dispatch(correct(selected))
    } else if (selected !== quiz.answer) {
      dispatch(incorrect(selected))
    }
    if (quizList.length - 1 === currentIndex) {
      dispatch(final())
      alert('수고하셨습니다. 준비된 퀴즈가 모두 끝났습니다. ^^')
    }
  }
  const [state, setState] = useState<State | null>(null)

  const initState: () => Promise<State> = async () => {
    // 임시로 1초간 타임 아웃.
    return await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  useEffect(() => {
    ;(async () => {
      // 초기 데이터 불러오기
      if (!initalLoaded) {
        const initalState = await initState()
        setState(initalState)
        setInitalLoaded(true)
      }
    })()
  }, [initalLoaded])

  return (
    <>
      {initalLoaded ? (
        <>
          <QuizSessionView selecting={selecting} />
        </>
      ) : (
        <Loading>로딩중...</Loading>
      )}
    </>
  )
}

const Loading = styled.div`
  position: relative;
  font-size: 50px;
  top: 200px;
`

export default QuizSession
