import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Sparkles, Command } from 'lucide-react'

export default function Hero() {
  const [prompt, setPrompt] = useState('')
  const charCount = prompt.length

  const hint = useMemo(() => {
    const isMac = typeof window !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0
    return isMac ? '⌘↵' : 'Ctrl↵'
  }, [])

  const onKeyDown = (e) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
    const metaPressed = isMac ? e.metaKey : e.ctrlKey
    if (metaPressed && e.key === 'Enter') {
      e.preventDefault()
      handleBuild()
    }
  }

  const handleBuild = () => {
    // For now we just log; in a full app this would call the backend
    console.log('Build with AI:', prompt)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient aura */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_center,rgba(88,28,135,0.35),transparent_60%)]" />

      {/* Spline animation center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[720px] md:h-[820px] lg:h-[900px]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      {/* Gradient overlay to blend with dark theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-14 md:pt-36 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1.5 text-xs text-white/70"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            AI-powered app builder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
          >
            What will you build today?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-4 md:mt-6 text-base md:text-xl text-white/70 max-w-2xl"
          >
            Build, deploy & monetize your app by chatting with Flames AI.
          </motion.p>

          {/* Input Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 md:mt-10 relative"
          >
            {/* Gradient border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(at_top_left,theme(colors.cyan.500/.35),theme(colors.violet.600/.35),theme(colors.sky.500/.35),theme(colors.cyan.500/.35))] blur-[6px]" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <div className="p-4 md:p-6">
                <label htmlFor="prompt" className="sr-only">Describe your app in detail</label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Describe your app in detail..."
                  rows={5}
                  className="w-full resize-none rounded-xl bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:ring-offset-0 p-4 md:p-5 border border-white/10"
                />
                <p className="mt-2 text-xs text-white/50">
                  Example: A clean SaaS landing with pricing, auth, blog and a contact form. Use a soft pastel theme.
                </p>
                <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="text-xs text-white/60">{charCount} chars</div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleBuild}
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/30 transition-all duration-200 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                    >
                      Build with AI
                    </button>
                    <div className="text-[11px] md:text-xs text-white/60 inline-flex items-center gap-1">
                      <Command className="w-3.5 h-3.5" /> {hint} to build
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
