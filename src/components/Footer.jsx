export default function Footer() {
  return (
    <footer id="support" className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">VoltMobile</h3>
            <p className="mt-2 text-sm text-white/70 max-w-sm">Modern devices, transparent pricing, and service you can trust. Reach support 7 days a week.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/80">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Orders & shipping</li>
              <li>Warranty & repairs</li>
              <li>Returns & refunds</li>
              <li>Trade-in program</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/80">Newsletter</h4>
            <p className="mt-2 text-sm text-white/70">Get product drops, tips, and exclusive offers.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="you@example.com" className="flex-1 rounded-lg bg-white/5 px-3 py-2 text-sm placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40" />
              <button className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-medium px-4 py-2 transition">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} VoltMobile, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
