import { Smartphone, Star, CreditCard, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] } })
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Animated background blobs */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(16,185,129,0.45), transparent 60%)' }}
        initial={{ x: -40, y: -20, opacity: 0.7 }}
        animate={{ x: 20, y: 10, opacity: 0.9 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[40rem] w-[40rem] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle at 70% 70%, rgba(6,182,212,0.4), transparent 60%)' }}
        initial={{ x: 40, y: 20, opacity: 0.6 }}
        animate={{ x: -10, y: -30, opacity: 0.85 }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(60% 60% at 50% 40%, black 60%, transparent 100%)'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-20">
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-emerald-400" />
            <span className="text-lg font-semibold tracking-tight">VoltMobile</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#products" className="hover:text-white transition">Shop</a>
            <a href="#support" className="hover:text-white transition">Support</a>
          </div>
          <button className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 text-sm font-medium transition">Sign In</button>
        </motion.nav>

        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-300 px-3 py-1 text-xs font-medium ring-1 ring-emerald-400/30"
            >
              <Star className="h-3.5 w-3.5" /> Top-rated devices, trusted by thousands
            </motion.div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            >
              Upgrade your mobile life with living visuals
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              className="mt-4 text-white/80 max-w-xl"
            >
              A hero built with dynamic gradients and vector motion — no heavy images. Smooth, modern interactions that feel instant.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-6 py-3 transition">
                Shop Phones
              </a>
              <button className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 text-white font-medium transition">
                <CreditCard className="mr-2 h-4 w-4" /> Trade-in & Finance
              </button>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={4}
              className="mt-6 flex items-center gap-6 text-xs text-white/70"
            >
              <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-emerald-400" /> Free 48h delivery</div>
              <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-emerald-400" /> 24-month warranty</div>
            </motion.div>
          </div>

          {/* Animated device motif (SVG + orbits) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Glowing conic ring */}
              <div className="absolute -inset-1 rounded-[2rem] opacity-60 blur-xl" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(16,185,129,0.35), rgba(6,182,212,0.35), rgba(16,185,129,0.35))' }} />

              {/* Phone outline SVG with animated stroke */}
              <svg viewBox="0 0 300 600" className="relative z-10 block w-full h-auto">
                <defs>
                  <linearGradient id="strokeGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <radialGradient id="screenGlow" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="rgba(34,197,94,0.25)" />
                    <stop offset="60%" stopColor="rgba(6,182,212,0.15)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>

                {/* Screen glow */}
                <rect x="35" y="70" width="230" height="460" rx="28" fill="url(#screenGlow)" />

                {/* Device body */}
                <motion.rect
                  x="25"
                  y="40"
                  width="250"
                  height="520"
                  rx="42"
                  fill="rgba(255,255,255,0.04)"
                  stroke="url(#strokeGrad)"
                  strokeWidth="2.5"
                  style={{ filter: 'drop-shadow(0 10px 25px rgba(16,185,129,0.15))' }}
                  strokeDasharray="1400"
                  initial={{ strokeDashoffset: 1400 }}
                  animate={{ strokeDashoffset: [1400, 0, 1400] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Camera dot */}
                <circle cx="150" cy="68" r="4" fill="#1f2937" />
                {/* Speaker */}
                <rect x="120" y="62" width="60" height="6" rx="3" fill="#1f2937" />

                {/* Animated screen lines */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.rect
                    key={i}
                    x="50"
                    y={120 + i * 48}
                    width={200 - i * 8}
                    height="12"
                    rx="6"
                    fill="rgba(255,255,255,0.12)"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: [0.2, 0.8, 0.2], x: [0, 2, 0] }}
                    transition={{ duration: 2.6 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </svg>

              {/* Orbiting particles */}
              <motion.span
                className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.8)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '140px 0px' }}
              />
              <motion.span
                className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.8)]"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '-160px -20px' }}
              />
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#features"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-14 mx-auto hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur ring-1 ring-white/10 text-white/80"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
