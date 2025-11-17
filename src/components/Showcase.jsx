import { motion } from 'framer-motion'

const examples = [
  {
    title: 'SaaS Dashboard',
    img: 'https://images.unsplash.com/photo-1551281044-8cdb4a7b2b97?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Minimal Blog',
    img: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Personal Portfolio',
    img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'E‑commerce',
    img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <div className="pointer-events-none hidden lg:block absolute right-0 top-40 bottom-0 w-[44%]">
      <div className="relative h-full">
        {/* floating cards with subtle 3D */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute right-12 top-10 rotate-[-2deg]"
        >
          <Thumb {...examples[0]} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="absolute right-24 top-64 rotate-[3deg]"
        >
          <Thumb {...examples[1]} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.25 }}
          className="absolute right-6 top-[26rem] rotate-[-4deg]"
        >
          <Thumb {...examples[2]} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.05, delay: 0.3 }}
          className="absolute right-28 top-[40rem] rotate-[1deg]"
        >
          <Thumb {...examples[3]} />
        </motion.div>
      </div>
    </div>
  )
}

function Thumb({ title, img }) {
  return (
    <div className="pointer-events-auto select-none w-[320px] backdrop-blur-xl rounded-2xl border border-white/10 bg-white/5 shadow-2xl hover:-translate-y-0.5 transition-transform">
      <div className="relative">
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/10 via-cyan-400/20 to-fuchsia-400/20 blur" />
        <img src={img} alt={title} className="relative rounded-2xl w-full h-48 object-cover" />
      </div>
      <div className="p-3">
        <p className="text-white/80 text-sm">{title}</p>
      </div>
    </div>
  )
}
