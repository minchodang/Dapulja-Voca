import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import quizData from '../data/Quiz.json'
import { RootState } from '../modules'
import { reset } from '../modules/counter'

type Result = {
  quizIndex: number
  createdAt: Date
  word: string // 단어
  answer: string // 뜻
  selected: string // 선택한 답
  isCorrect: boolean // 정답여부
  reset: () => void
}

export default function QuizResult() {
  const header = ['퀴즈 번호', '단어', '정답', '정답 여부', '푼 날짜']
  // const quizlist = useSelector((state: RootState) => state.counter.quizList)
  const quizResult = useSelector((state: RootState) => state.counter.quizResults)
  // const selected = useSelector((selected: RootState) => selected.select.selected)
  // const currentIndex = useSelector((state: RootState) => state.counter.currentIndex)
  // const isCorrect = useSelector(
  //   (state: RootState) => state.counter.quizResults[currentIndex].isCorrect
  // )
  const today = new Date()
  let year = today.getFullYear() // 년도
  let month = today.getMonth()
  let day = today.getDate()
  // const selected = useSelector((state: RootState) => state.counter.selected)
  // const isCorrect = useSelector((state: RootState) => state.counter.isCorrect)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function go(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement
    if (target.innerText === '홈으로') {
      navigate('/')
    } else {
      navigate('/wordlist')
    }
  }
  const selecting = () => {
    dispatch(reset())
    navigate('/quiz')
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            {header.map((t) => (
              <th>{t}</th>
            ))}
          </tr>
        </thead>

        {quizResult.map((t) => (
          <tbody key={t.answer}>
            <td>{t.index + 1}</td>
            <td>{t.text}</td>
            <td>{t.answer}</td>
            {/* <td>{quizIndex}</td> */}
            <td>{t.isCorrect ? '정답' : '오답'}</td>
            <td>{year + '/' + month + '/' + day}</td>
          </tbody>
        ))}
      </table>
      <button onClick={go}>홈으로</button>
      <button onClick={go}>단어 목록 보기</button>
      <button onClick={selecting}>퀴즈 다시 풀어보기</button>
    </>
  )
}
