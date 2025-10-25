import { ShieldCheck, Truck, RefreshCcw, Smartphone } from 'lucide-react';

const items = [
  {
    icon: Smartphone,
    title: 'Flagship Selection',
    desc: 'Only the latest, high-performance smartphones curated for every budget.'
  },
  {
    icon: ShieldCheck,
    title: 'Extended Warranty',
    desc: 'Up to 24 months of device protection with hassle-free claims.'
  },
  {
    icon: Truck,
    title: 'Express Delivery',
    desc: 'Fast, trackable shipping with real-time notifications to your phone.'
  },
  {
    icon: RefreshCcw,
    title: 'Trade-in & Upgrade',
    desc: 'Get instant value for your old device and pay only the difference.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything you need, built-in</h2>
          <p className="mt-3 text-white/70">From selection to delivery, we fine-tuned every step so you can upgrade with confidence.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition">
              <div className="h-10 w-10 rounded-lg bg-emerald-400/10 ring-1 ring-emerald-400/30 flex items-center justify-center">
                <Icon className="h-5 w-5 text-emerald-300" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
