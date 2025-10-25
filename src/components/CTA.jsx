import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to make the switch?</h3>
              <p className="mt-3 text-white/80">Join thousands upgrading to powerful devices with fast delivery and extended warranty included.</p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-300" /> Free 48h express delivery</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-300" /> 24-month device protection</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-300" /> Easy trade-in & financing options</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <motion.a whileTap={{ scale: 0.98 }} href="#products" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-6 py-3 transition">Shop featured phones</motion.a>
              <motion.a whileTap={{ scale: 0.98 }} href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 text-white font-medium transition">Explore features</motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
