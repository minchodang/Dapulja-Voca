import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../modules'
import { reset } from '../modules/counter'
import styled from 'styled-components'

export default function QuizResult() {
  const header = ['퀴즈 번호', '단어', '정답', '정답 여부', '푼 날짜']
  const quizResult = useSelector((state: RootState) => state.counter.quizResults)

  const today = new Date()
  let year = today.getFullYear() // 년도
  let month = today.getMonth()
  let day = today.getDate()
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
  function reQuiz() {
    dispatch(reset())
    navigate('/quiz')
  }
  const tables = {
    marginTop: '16px',
    padding: '8px',
    textalign: 'center',
    background: '#efefef'
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
          <tbody key={t.answer} style={tables}>
            <td>{t.index + 1}</td>
            <td>{t.text}</td>
            <td>{t.answer}</td>
            <td>{t.isCorrect ? '정답' : '오답'}</td>
            <td>{year + '/' + month + '/' + day}</td>
          </tbody>
        ))}
      </table>
      <ButtonContainer>
        <button onClick={go}>홈으로</button>
        <button onClick={go}>단어 목록 보기</button>
        <button onClick={reQuiz}>퀴즈 다시 풀어보기</button>
      </ButtonContainer>
    </>
  )
}

const ButtonContainer = styled.div`
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: space-around;
`
