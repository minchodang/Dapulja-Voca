type Word = {
  text: string
  meaning: string
  index: number
}

const tables = {
  marginTop: '16px',
  padding: '8px',
  textalign: 'center',
  background: '#efefef'
}

export default function WordView({ text, meaning, index }: Word) {
  return (
    <tbody key={text} style={tables}>
      <td>{index + 1}</td>
      <td>{text}</td>
      <td>{meaning}</td>
    </tbody>
  )
}
