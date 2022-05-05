import { ButtonHTMLAttributes, HtmlHTMLAttributes, useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'

// State
type Quiz = {
  index: number
  text: string // 문제
  answer: string // 정답
  selections: string[] // 보기 목록 (정답 포함), 2지 선다
}

type initialData = {
  text: string
  meanig: string
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

// Action

// Select 동작방식
// 선지를 선택하면, 새로운 퀴즈결과가 생기고,
// 다음 문제로 넘어가야 한다.
type Select = {
  type: 'SELECT'
  payload: {
    quizIndex: number
  }
}

type Action =
  | Select
  | {
      type: 'CORRECTSELECT'
      currentIndex: number
      correctCount: number
      payload: number
    }
  | {
      type: 'INCORRECTSELECT'
      currentIndex: number
      inCorrectCoun: number
    }
  | {
      type: 'FINAL'
      isCompleted: boolean
    }

export function quizSessionReducer(state: State, action: Action): State {
  // TODO
  // 선택한 선지에 따라
  // state 값이 변경되어야 함.
  // 예를 들어, 퀴즈 결과가 생성되고
  // 맞은 혹은 틀린 개수가 업데이트 되고,
  // 다음 퀴즈로 넘어가야 함.
  switch (action.type) {
    case 'CORRECTSELECT':
      return {
        ...state,
        currentIndex: state.currentIndex++,
        correctCount: state.correctCount++
      }
    // const newState = { ...state }
    // return {
    //   ...newState,
    //   currentIndex: action.currentIndex
    // }
    case 'INCORRECTSELECT':
      return {
        ...state,
        currentIndex: state.currentIndex++,
        inCorrectCount: state.inCorrectCount++
      }
    case 'FINAL':
      return {
        ...state,
        isCompleted: true
      }
    default:
      throw new Error('Unhandled action')
  }
  // const newState = { ...state }
  // return newState
}

const initialState: State = {
  isCompleted: false,
  correctCount: 0,
  inCorrectCount: 0,
  currentIndex: 0,
  payload: 1,
  quizList: [
    {
      index: 0,
      text: 'apple',
      answer: 'n. 사과',
      selections: ['n. 사과', 'n. 밀가루 반죽', 'a. 지속적인, 끈질긴']
    },
    {
      index: 1,
      text: 'brick',
      answer: 'n. 벽돌',
      selections: ['n. 벽돌', 'v. 뛰다, 급증하다']
    },
    {
      index: 2,
      text: 'apple',
      answer: 'n. 사과',
      selections: ['n. 사과', 'n. 밀가루 반죽', 'a. 지속적인, 끈질긴']
    },
    {
      index: 3,
      text: 'machine',
      answer: 'n. 기계',
      selections: ['n. 기계', 'n. 밀가루 반죽', 'a. 지속적인, 끈질긴']
    },
    {
      index: 4,
      text: 'run',
      answer: 'v. 뛰다',
      selections: ['v.뛰다', 'n. 밀가루 반죽', 'a. 지속적인, 끈질긴']
    }
  ],
  quizResults: []
}

// View
function QuizSessionView(selector: State, onClick: (selected: string) => void, dispatch: Function) {
  function QuizView(quiz: Quiz) {
    const articleStyle = {
      marginTop: '16px',
      padding: '8px',
      background: '#efefef'
    }
    const selecting = (e: React.MouseEvent<HTMLButtonElement>) => {
      const target = e.target as HTMLElement
      if (target.innerText === quiz.answer) {
        dispatch({ type: 'CORRECTSELECT' })
      } else {
        dispatch({ type: 'INCORRECTSELECT' })
      }
      if (selector.quizList.length - 1 === selector.currentIndex) {
        dispatch({ type: 'FINAL' })
      }
    }
    return (
      <article style={articleStyle}>
        <header>{quiz.text}</header>
        {quiz.selections.map((sel, idx) => {
          return (
            <button key={idx} onClick={selecting}>
              {sel}
            </button>
          )
        })}
      </article>
    )
  }

  const currentQuiz = selector.quizList[selector.currentIndex]

  return (
    <section>
      <div>완료 여부: {selector.isCompleted ? '완료' : '미완료'}</div>
      <div>맞은 개수 {selector.correctCount}</div>
      <div>틀린 개수 {selector.inCorrectCount}</div>
      {selector.isCompleted ? <Link to='/'>홈으로</Link> : QuizView(currentQuiz)}
    </section>
  )
}

function QuizSession() {
  const [initalLoaded, setInitalLoaded] = useState(false)
  const [state, setState] = useState<State | null>(null)
  const [selector, dispatch] = useReducer(quizSessionReducer, initialState)
  const initState: () => Promise<State> = async () => {
    // 임시로 1초간 타임 아웃.
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const initialData = [
      {
        text: 'apple',
        meaning: 'a. 사과'
      },
      {
        text: 'brick',
        meaning: 'n. 벽돌'
      },
      {
        text: 'completion',
        meaning: 'n. 완성, 성취'
      },
      {
        text: 'obstacle',
        meaning: 'n. 장애물'
      },
      {
        text: 'horn',
        meaning: 'n. 뿔, 경적'
      },
      {
        text: 'dough',
        meaning: 'n. 밀가루 반죽'
      },
      {
        text: 'leap',
        meaning: 'v. 뛰다, 급증하다.'
      },
      {
        text: 'pearl',
        meaning: 'n. 진주, 진주색'
      },
      {
        text: 'tourism',
        meaning: 'n. 관광, 관광 사업'
      },
      {
        text: 'persisent',
        meaning: 'a. 지속적인, 끈질긴'
      }
    ]
    // TODO
    // initialData를 State 타입으로 변경 후 리턴한다.
    // quizList[].selections 을 만드는 조건은
    // 해당 단어의 뜻 하나와 다른 단어의 뜻 둘을 포함하여
    // 3지 선다형 뜻 찾기 문제 보기로 변환한다.
    // 아래 데이터는 예시 데이터이므로 삭제.
    return {
      isCompleted: false,
      correctCount: 0,
      inCorrectCount: 0,
      currentIndex: 0,
      payload: 1,
      quizList: [],
      quizResults: []
    }
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

  const quizSelected = (selected: string) => {
    if (state == null) return

    return setState(selector)
  }

  return <div>{state ? QuizSessionView(selector, quizSelected, dispatch) : '로딩중...'}</div>
}

export default QuizSession
