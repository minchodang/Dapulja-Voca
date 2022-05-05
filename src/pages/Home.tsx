import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  function go(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement
    if (target.innerText === '퀴즈 보기') {
      navigate('/quiz')
    } else {
      navigate('/wordlist')
    }
  }
  return (
    <>
      <button onClick={go}>단어 목록 보기</button>
      <button onClick={go}>퀴즈 보기</button>
    </>
  )
}

export default Home
