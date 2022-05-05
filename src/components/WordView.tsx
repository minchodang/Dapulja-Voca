type Word = {
  text: string
  meaning: string
}

export default function WordView({ text, meaning }: Word) {
  return (
    <div key={text}>
      {text} / {meaning}
    </div>
  )
}
