import { motion } from 'framer-motion'
import { Layers, Rocket, ShieldCheck, Code2 } from 'lucide-react'

const items = [
  { icon: Rocket, title: 'Instant scaffolding', desc: 'Start from idea to running app in minutes with AI‑driven generation.' },
  { icon: Layers, title: 'Beautiful by default', desc: 'Modern, responsive UI with glassmorphism and gradients built‑in.' },
  { icon: Code2, title: 'Editable code', desc: 'Every line is yours. Iterate, export, and customize endlessly.' },
  { icon: ShieldCheck, title: 'Production‑ready', desc: 'Best practices, accessibility, and performance baked in.' },
]

export default function BottomFeatures() {
  return (
    <section className="relative border-t border-white/10 mt-24 md:mt-40">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_bottom,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-white tracking-tight"
        >
          Everything You Need to Build
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-400/20 via-fuchsia-400/10 to-indigo-500/20 blur" />
              <div className="relative">
                <it.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-3 text-lg font-medium text-white">{it.title}</h3>
                <p className="mt-1 text-sm text-white/70">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
