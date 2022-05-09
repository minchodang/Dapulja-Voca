import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

type Onclick = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

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
    <ButtonContainer>
      <ListButton1 onClick={go}>단어 목록 보기</ListButton1>
      <ListButton2 onClick={go}>퀴즈 보기</ListButton2>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
`
const ListButton1 = styled.button<Onclick>`
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 30px;
  font-family: sans-serif;
  transition: all 0.4s;
  width: 50%;
  display: flex;
  font-size: 30px;
  justify-content: space-around;
`
const ListButton2 = styled.button<Onclick>`
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 30px;
  font-family: sans-serif;
  transition: all 0.4s;
  margin-top: 20px;
  font-size: 30px;
  width: 50%;
  display: flex;
  justify-content: space-around;
`
export default Home
