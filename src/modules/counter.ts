import quizData from '../data/Quiz.json'

const INCREASE = 'counter/INCREASE' as const
const DECREASE = 'counter/DECREASE' as const
const FINAL = 'counter/FINAL' as const

export const increase = () => ({
  type: INCREASE
})

export const decrease = () => ({
  type: DECREASE
})
export const final = () => ({
  type: FINAL
})

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof final>

type Quiz = {
  index: number
  text: string // 문제
  answer: string // 정답
  selections: string[] // 보기 목록 (정답 포함), 2지 선다
}

type QuizResult = {
  quizIndex: number
  createdAt: Date
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
  quizList: Quiz[]
  quizResults: QuizResult[]
}
const initialState: State = {
  isCompleted: false,
  correctCount: 0,
  inCorrectCount: 0,
  currentIndex: 0,
  payload: 1,
  quizList: quizData,
  quizResults: []
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
    case INCREASE:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        correctCount: state.correctCount + 1
      }
    // const newState = { ...state }
    // return {
    //   ...newState,
    //   currentIndex: action.currentIndex
    // }
    case DECREASE:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        inCorrectCount: state.inCorrectCount + 1
      }
    case FINAL:
      return {
        ...state,
        isCompleted: true
      }
    default:
      return state
  }
  // const newState = { ...state }
  // return newState
}
