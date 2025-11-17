import Hero from './components/Hero'
import Showcase from './components/Showcase'
import BottomFeatures from './components/BottomFeatures'

function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#05060a] via-[#0b1020] to-[#0b0220] text-white">
      {/* subtle starry noise */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(139,92,246,0.15),transparent_60%)]" />

      <Hero />
      <Showcase />
      <BottomFeatures />

      <footer className="relative px-6 py-12 text-center text-white/50">
        Flames AI • Build anything by chatting
      </footer>
    </div>
  )
}

export default App
