import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import WordView from '../components/WordView'

interface Word {
  text: string
  meaning: string
}
type Onclick = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function WordList() {
  const [wordlist, setWordlist] = useState<Word[]>([])
  useEffect(() => {
    axios
      .get<Word[]>(
        'https://cors-anywhere.herokuapp.com/https://solution-tmp.s3.ap-northeast-2.amazonaws.com/vocabs.json'
      )
      .then((res) => setWordlist(res.data))
  }, [])
  const navigate = useNavigate()
  function go(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement
    if (target.innerText === '퀴즈 보기') {
      navigate('/quiz')
    } else {
      navigate('/')
    }
  }
  // TODO
  // 훅을 이용해서, 화면이 로드되면 아래 주소에서 단어를 들고와서 화면에 표시
  // 아래 샘플 단어를 대체해야 함.
  // https://solution-tmp.s3.ap-northeast-2.amazonaws.com/vocabs.json
  // warning!
  // 만약 어떠한 이유로 작동이 되지 않는다면, 그 문제를 우회해서
  // 전체 기능이 동작하도록 코드를 구현.
  const header = ['퀴즈 번호', '단어', '뜻']
  return (
    <Section>
      <Table>
        <thead>
          <tr>
            {header.map((t) => (
              <th>{t}</th>
            ))}
          </tr>
        </thead>
        {wordlist.map((word, index) => (
          <WordView text={word.text} meaning={word.meaning} index={index} />
        ))}
      </Table>

      <ButtonContainer>
        <Button1 onClick={go}>홈으로</Button1>
        <Button2 onClick={go}>퀴즈 보기</Button2>
      </ButtonContainer>
    </Section>
  )
}
const Section = styled.section`
  /* text-align: center; */
  margin-top: 150px;
`
const Table = styled.table`
  margin: 100px auto;
`
const Button1 = styled.button<Onclick>`
  margin-right: 5%;
`
const Button2 = styled.button<Onclick>`
  margin-left: 5%;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default WordList
