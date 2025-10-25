import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jasmine K.',
    role: 'Photographer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    text: 'Volt X1 Pro crushes long shoots. Battery and camera are incredible — delivered in under 48 hours.'
  },
  {
    name: 'Marco L.',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
    text: 'Seamless checkout and top-notch support. Trade-in made the upgrade a no-brainer.'
  },
  {
    name: 'Aisha A.',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop',
    text: 'The site feels fast and modern. The device quality exceeded expectations for the price.'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-black">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What customers say</h2>
          <p className="mt-3 text-white/70">Real stories from people who switched to VoltMobile.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22,1,0.36,1] }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <Quote className="absolute -top-3 -right-3 h-16 w-16 rotate-12 text-white/5" />
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/80">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
