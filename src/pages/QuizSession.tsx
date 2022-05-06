import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules'
import { useEffect, useState } from 'react'
import { correct, incorrect, final } from '../modules/counter'
import QuizSessionView from '../components/QuizSessionView'

// import { select } from '../modules/select'

type State = {}

function QuizSession() {
  const correctCount = useSelector((state: RootState) => state.counter.correctCount)
  const isCompleted = useSelector((state: RootState) => state.counter.isCompleted)
  const inCorrectCount = useSelector((state: RootState) => state.counter.inCorrectCount)
  const quizList = useSelector((state: RootState) => state.counter.quizList)
  const currentIndex = useSelector((state: RootState) => state.counter.currentIndex)
  const quiz = useSelector((state: RootState) => state.counter.quizList[state.counter.currentIndex])
  // const quizIndex = useSelector((state: RootState) => state.select.quizIndex)
  const dispatch = useDispatch()
  const [initalLoaded, setInitalLoaded] = useState(false)

  //디스패치 함수 설정.
  const selecting = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement
    if (target.innerText === quiz.answer) {
      // console.log(quizIndex)
      dispatch(correct())
    } else if (target.innerText !== quiz.answer) {
      // console.log(quizIndex)
      dispatch(incorrect())
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
          <QuizSessionView
            correctCount={correctCount}
            isCompleted={isCompleted}
            inCorrectCount={inCorrectCount}
            selecting={selecting}
          />
        </>
      ) : (
        <div>로딩중...</div>
      )}
    </>
  )
}

export default QuizSession
