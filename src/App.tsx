import { Game } from './components/Game'

function App() {
  return (
    <div className="h-[100dvh] w-full bg-background flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.95),rgba(15,23,42,0.95)),url('https://media.giphy.com/media/26brrWDqP6d814Kgo/giphy.gif')] bg-cover bg-center opacity-30 pointer-events-none" />
      <Game />
    </div>
  )
}

export default App
