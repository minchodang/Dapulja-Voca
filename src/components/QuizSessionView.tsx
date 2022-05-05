// import axios from 'axios'
// import { ButtonHTMLAttributes, HtmlHTMLAttributes, useEffect, useReducer, useState } from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import quizData from '../data/Quiz.json'
// import { RootState } from '../modules'
import QuizView from './QuizView'

// State
// type Quiz = {
//   index: number
//   text: string // 문제
//   answer: string // 정답
//   selections: string[] // 보기 목록 (정답 포함), 2지 선다
// }

// type QuizResult = {
//   quizIndex: number
//   createdAt: Date
//   answer: string // 정답
//   selected: string // 선택한 답
//   isCorrect: boolean // 정답여부
// }

// type State = {
//   isCompleted: boolean // computed
//   correctCount: number // computed
//   inCorrectCount: number // computed
//   currentIndex: number // computed
//   payload: number
//   quizList: Quiz[]
//   quizResults: QuizResult[]
// }

// Action

// Select 동작방식
// 선지를 선택하면, 새로운 퀴즈결과가 생기고,
// 다음 문제로 넘어가야 한다.
// type Select = {
//   type: 'SELECT'
//   payload: {
//     quizIndex: number
//     selected: string
//   }
// }

// type Action =
//   | Select
//   | {
//       type: 'CORRECTSELECT'
//       currentIndex: number
//       correctCount: number
//       payload: number
//     }
//   | {
//       type: 'INCORRECTSELECT'
//       currentIndex: number
//       inCorrectCoun: number
//     }
//   | {
//       type: 'FINAL'
//       isCompleted: boolean
//     }

// export function quizSessionReducer(state: State, action: Action): State {
//   // TODO
//   // 선택한 선지에 따라
//   // state 값이 변경되어야 함.
//   // 예를 들어, 퀴즈 결과가 생성되고
//   // 맞은 혹은 틀린 개수가 업데이트 되고,
//   // 다음 퀴즈로 넘어가야 함.
//   switch (action.type) {
//     case 'CORRECTSELECT':
//       return {
//         ...state,
//         currentIndex: state.currentIndex++,
//         correctCount: state.correctCount++
//       }
//     // const newState = { ...state }
//     // return {
//     //   ...newState,
//     //   currentIndex: action.currentIndex
//     // }
//     case 'INCORRECTSELECT':
//       return {
//         ...state,
//         currentIndex: state.currentIndex++,
//         inCorrectCount: state.inCorrectCount++
//       }
//     case 'FINAL':
//       return {
//         ...state,
//         isCompleted: true
//       }
//     default:
//       return state
//   }
//   // const newState = { ...state }
//   // return newState
// }

// const initialState: State = {
//   isCompleted: false,
//   correctCount: 0,
//   inCorrectCount: 0,
//   currentIndex: 0,
//   payload: 1,
//   quizList: quizData,
//   quizResults: []
// }

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
  // const quiz = useSelector((state: RootState) => state.counter.quizList[state.counter.currentIndex])
  // const [selector, dispatch] = useReducer(quizSessionReducer, initialState)

  // function QuizView(quiz: Quiz) {
  //   const articleStyle = {
  //     marginTop: '16px',
  //     padding: '8px',
  //     background: '#efefef'
  //   }
  //   const selecting = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     const target = e.target as HTMLElement
  //     if (target.innerText === quiz.answer) {
  //       dispatch({ type: 'CORRECTSELECT' })
  //     } else {
  //       dispatch({ type: 'INCORRECTSELECT' })
  //     }
  //     if (selector.quizList.length - 1 === selector.currentIndex) {
  //       dispatch({ type: 'FINAL' })
  //     }
  //   }
  //   return (
  //     <article style={articleStyle}>
  //       <header>{quiz.text}</header>
  //       {quiz.selections.map((sel, idx) => {
  //         return (
  //           <button key={idx} onClick={selecting}>
  //             {sel}
  //           </button>
  //         )
  //       })}
  //     </article>
  //   )
  // }

  // const currentQuiz = selector.quizList[selector.currentIndex]

  return (
    <section>
      <div>완료 여부: {isCompleted ? '완료' : '미완료'}</div>
      <div>맞은 개수 {correctCount}</div>
      <div>틀린 개수 {inCorrectCount}</div>
      {isCompleted ? <Link to='/'>홈으로</Link> : <QuizView selecting={selecting} />}
    </section>
  )
}
