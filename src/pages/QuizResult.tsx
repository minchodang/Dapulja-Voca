import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../modules'
import { reset } from '../modules/counter'
import styled from 'styled-components'

type Onclick = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

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

  return (
    <>
      <Tables>
        <thead>
          <tr>
            {header.map((t) => (
              <th>{t}</th>
            ))}
          </tr>
        </thead>

        {quizResult.map((t) => (
          <Tbody key={t.answer}>
            <Td>{t.index + 1}</Td>
            <Td>{t.text}</Td>
            <Td>{t.answer}</Td>
            <Td>{t.isCorrect ? '정답' : '오답'}</Td>
            <Td>{year + '/' + month + '/' + day}</Td>
          </Tbody>
        ))}
      </Tables>
      <ButtonContainer>
        <Button1 onClick={go}>홈으로</Button1>
        <Button2 onClick={go}>단어 목록 보기</Button2>
        <Button3 onClick={reQuiz}>퀴즈 다시 풀어보기</Button3>
      </ButtonContainer>
    </>
  )
}

const Tables = styled.table`
  margin: 150px auto;
  font-size: 35px;
`
const Tbody = styled.tbody`
  padding: 20px;
  text-align: center;
  background-color: #efefef;
`

const Td = styled.td`
  padding: 15px;
`

const ButtonContainer = styled.div`
  margin-top: -70px;
  display: flex;
  justify-content: center;
`

const Button1 = styled.button<Onclick>`
  font-size: 35px;
  margin-right: 70px;
`
const Button2 = styled.button<Onclick>`
  font-size: 35px;
  margin-right: 70px;
`
const Button3 = styled.button<Onclick>`
  font-size: 35px;
`
