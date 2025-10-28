import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-12 pb-16" id="hero">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center" style={{ backgroundImage: "url('/hero-bg.svg')", backgroundSize: 'cover', borderRadius: 12, padding: 20 }}>
        <div>
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold tracking-tight">
            Mouloud El Arram
            <div className="text-google-blue text-lg mt-2">Software Engineer & Digital Architect</div>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-lg leading-relaxed">
            I design reliable, scalable and intelligent systems that bridge enterprise architecture, cloud computing and AI — aligning technical strategy with real-world impact.
          </motion.p>

          <div className="mt-6 space-y-2">
            <a href="#projects" className="inline-block bg-accent text-white px-5 py-3 rounded-md">View case studies</a>
            <div className="text-sm opacity-80">Software Quality Engineer at Bpifrance • Télécom Paris (Master’s in Enterprise Digital Architecture)</div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="hidden md:flex justify-center">
          <img src="/hero-graphic.svg" alt="architectural digital grid" className="w-80 h-80 object-contain shadow-lg rounded-md" />
        </motion.div>
      </div>
    </section>
  )
}
