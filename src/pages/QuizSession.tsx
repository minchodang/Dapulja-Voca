import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules'
import { ButtonHTMLAttributes, HtmlHTMLAttributes, useEffect, useReducer, useState } from 'react'
import { increase, decrease, final } from '../modules/counter'
import QuizSessionView from '../components/QuizSessionView'
import { $CombinedState } from 'redux'

function QuizSession() {
  const correctCount = useSelector((state: RootState) => state.counter.correctCount)
  const isCompleted = useSelector((state: RootState) => state.counter.isCompleted)
  const inCorrectCount = useSelector((state: RootState) => state.counter.inCorrectCount)
  const quizList = useSelector((state: RootState) => state.counter.quizList)
  const currentIndex = useSelector((state: RootState) => state.counter.currentIndex)
  const quiz = useSelector((state: RootState) => state.counter.quizList[state.counter.currentIndex])
  const dispatch = useDispatch()

  const selecting = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement
    if (target.innerText === quiz.answer) {
      dispatch(increase())
    } else {
      dispatch(decrease())
    }
    if (quizList.length - 1 === currentIndex) {
      dispatch(final())
    }
  }

  // const initState: () => Promise<State> = async () => {
  // 임시로 1초간 타임 아웃.
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  // TODO
  // initialData를 State 타입으로 변경 후 리턴한다.
  // quizList[].selections 을 만드는 조건은
  // 해당 단어의 뜻 하나와 다른 단어의 뜻 둘을 포함하여
  // 3지 선다형 뜻 찾기 문제 보기로 변환한다.
  // 아래 데이터는 예시 데이터이므로 삭제.
  //   return {
  //     isCompleted: false,
  //     correctCount: 0,
  //     inCorrectCount: 0,
  //     currentIndex: 0,
  //     payload: 1,
  //     quizList: [],
  //     quizResults: []
  //   }
  // }

  // useEffect(() => {
  //   ;(async () => {
  //     // 초기 데이터 불러오기
  //     if (!initalLoaded) {
  //       // const initalState = await initState()
  //       // setState(initalState)
  //       setInitalLoaded(true)
  //     }
  //   })()
  // }, [initalLoaded])

  // const quizSelected = (selected: string) => {
  //   if (state == null) return

  //   return setState(selector)
  // }

  return (
    // <>
    //   {initalLoaded ? (
    <>
      <QuizSessionView
        correctCount={correctCount}
        isCompleted={isCompleted}
        inCorrectCount={inCorrectCount}
        selecting={selecting}
      />
    </>
    //   ) : (
    //     <div>abc</div>
    //   )}
    // </>
  )
}

export default QuizSession
