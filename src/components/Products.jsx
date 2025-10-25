import { motion } from 'framer-motion';

const products = [
  {
    id: 'volt-x1',
    name: 'Volt X1 Pro',
    price: 899,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop',
    highlights: ['6.7" AMOLED 120Hz', 'Triple Camera 50MP', '5G | 5000mAh']
  },
  {
    id: 'volt-air',
    name: 'Volt Air',
    price: 649,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35f6?q=80&w=1600&auto=format&fit=crop',
    highlights: ['6.1" OLED 90Hz', 'Dual Camera 48MP', '5G | 4200mAh']
  },
  {
    id: 'volt-mini',
    name: 'Volt Mini',
    price: 449,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    highlights: ['5.9" OLED 120Hz', 'Compact Design', '5G | 4000mAh']
  },
  {
    id: 'volt-max',
    name: 'Volt Max Ultra',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1600&auto=format&fit=crop',
    highlights: ['6.8" LTPO 120Hz', 'Periscope 120mm', '5G | 5200mAh']
  }
];

function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
      className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/[0.08] transition"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold tracking-tight">{product.name}</h3>
            <div className="mt-1 flex flex-wrap gap-2 text-xs text-white/70">
              {product.highlights.map((h) => (
                <span key={h} className="rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">{h}</span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold">${product.price}</div>
            <div className="text-xs text-white/60">or $/mo with finance</div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <motion.button whileTap={{ scale: 0.98 }} className="flex-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 transition">Buy now</motion.button>
          <motion.button whileTap={{ scale: 0.98 }} className="rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 transition">Details</motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured phones</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Handpicked best sellers packed with performance, camera quality, and battery life. Ready to ship.</p>
          </div>
          <a href="#" className="hidden md:inline-flex rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 transition">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
