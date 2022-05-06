import React from 'react'
import quizData from '../data/ResultData.json'
import quizResultData from '../data/ResultData.json'

const CORRECT = 'counter/CORRECT' as const
const INCORRECT = 'counter/INCORRECT' as const
const FINAL = 'counter/FINAL' as const
const RESET = 'counter/RESET' as const

export const correct = () => ({
  type: CORRECT
})

export const incorrect = () => ({
  type: INCORRECT
})
export const final = () => ({
  type: FINAL
})
export const reset = () => ({
  type: RESET
})

type CounterAction =
  | ReturnType<typeof correct>
  | ReturnType<typeof incorrect>
  | ReturnType<typeof final>
  | ReturnType<typeof reset>

type Quiz = {
  index: number
  text: string // 문제
  answer: string // 정답
  selections: string[] // 보기 목록 (정답 포함), 2지 선다
}

type QuizResult = {
  index: number
  text: string // 문제
  answer: string // 정답
  selected: string // 선택한 답
  isCorrect: boolean // 정답여부
}

type State = {
  isCompleted: boolean // computed
  correctCount: number // computed
  inCorrectCount: number // computed
  currentIndex: number // computed
  payload: number
  isCorrect: boolean
  selected: string
  quizList: Quiz[]
  quizResults: QuizResult[]
  // selected: string // 선택한 답
  // isCorrect: boolean | undefined // 정답여부
}
const initialState: State = {
  isCompleted: false,
  isCorrect: false,
  selected: '',
  correctCount: 0,
  inCorrectCount: 0,
  currentIndex: 0,
  payload: 1,
  quizList: quizData,
  quizResults: quizResultData
  // selected: '', // 선택한 답
  // isCorrect: undefined // 정답여부
}

export default function quizSessionReducer(
  state: State = initialState,
  action: CounterAction
): State {
  // TODO
  // 선택한 선지에 따라
  // state 값이 변경되어야 함.
  // 예를 들어, 퀴즈 결과가 생성되고
  // 맞은 혹은 틀린 개수가 업데이트 되고,
  // 다음 퀴즈로 넘어가야 함.
  switch (action.type) {
    case CORRECT:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        correctCount: state.correctCount + 1,
        isCorrect: (state.quizResults[state.currentIndex].isCorrect = true)
        // selected: (state.quizResults[state.currentIndex].selected = target.innerText)
        //quizResults: state.quizResults
        // selected: state.selected,
        // isCorrect: true
      }
    case INCORRECT:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        inCorrectCount: state.inCorrectCount + 1,
        isCorrect: (state.quizResults[state.currentIndex].isCorrect = false)
        // selected: (state.quizResults[state.currentIndex].selected = target.innerText)
        // selected: state.selected,
        // isCorrect: false
      }
    case FINAL:
      return {
        ...state,
        isCompleted: true
      }
    case RESET:
      return {
        ...state,
        currentIndex: 0,
        inCorrectCount: 0,
        correctCount: 0,
        isCompleted: false
      }
    default:
      return state
  }
}
