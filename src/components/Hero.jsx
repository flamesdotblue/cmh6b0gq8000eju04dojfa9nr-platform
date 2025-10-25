import Spline from '@splinetool/react-spline';
import { Smartphone, Star, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays (non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.45)]" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-20">
        <nav className="flex items-center justify-between">
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
        </nav>

        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-300 px-3 py-1 text-xs font-medium ring-1 ring-emerald-400/30">
              <Star className="h-3.5 w-3.5" /> Top-rated devices, trusted by thousands
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Upgrade your mobile life with modern tech
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              Discover flagship smartphones at honest prices, fast delivery, and extended warranty. Seamless shopping designed for speed and trust.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-6 py-3 transition">
                Shop Phones
              </a>
              <button className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 text-white font-medium transition">
                <CreditCard className="mr-2 h-4 w-4" /> Trade-in & Finance
              </button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-white/70">
              <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-emerald-400" /> Free 48h delivery</div>
              <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-emerald-400" /> 24-month warranty</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
              <img
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop"
                alt="Showcase phone"
                className="w-full h-[360px] object-cover rounded-xl"
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1510557880182-3d4d3cba35f6?q=80&w=1200&auto=format&fit=crop',
                ].map((src, i) => (
                  <img key={i} src={src} alt="device" className="h-28 w-full object-cover rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
