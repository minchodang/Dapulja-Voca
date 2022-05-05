import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WordView from '../components/WordView'

interface Word {
  text: string
  meaning: string
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

  return (
    <section>
      {wordlist.map((word) => (
        <WordView text={word.text} meaning={word.meaning} />
      ))}
      <button onClick={go}>홈으로</button>
      <button onClick={go}>퀴즈 보기</button>
    </section>
  )
}

export default WordList
