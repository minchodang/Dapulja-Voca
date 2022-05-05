type Result = {
  quizIndex: number
  createdAt: Date
  answer: string // 정답
  selected: string // 선택한 답
  isCorrect: boolean // 정답여부
}

export default function QuizResult() {
  const header = ['퀴즈 번호', '정답', '선택 한 답', '정답 여부', '푼 날짜']

  return (
    <>
      <table>
        <thead>
          <tr>
            {header.map((i) => (
              <th>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>abc</tbody>
      </table>
    </>
  )
}
