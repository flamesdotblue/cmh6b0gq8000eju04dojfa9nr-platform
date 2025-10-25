import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How fast is shipping?',
    a: 'We offer express shipping that delivers in 24–48 hours to most regions. You will receive live tracking updates via SMS and email.'
  },
  {
    q: 'What is included in the warranty?',
    a: 'Our 24-month warranty covers manufacturing defects and device failures under normal use. Claims are handled within 3–5 business days.'
  },
  {
    q: 'Can I trade in my old phone?',
    a: 'Yes. Use our trade-in tool at checkout to get instant credit based on your device model and condition.'
  },
  {
    q: 'Do you offer financing?',
    a: 'We partner with certified providers for monthly payments with clear, upfront terms. No hidden fees.'
  }
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/10 bg-white/5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-white/[0.06] transition rounded-xl"
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="h-4 w-4 text-white/70" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22,1,0.36,1] }}
          >
            <div className="px-4 pb-4 pt-0 text-sm text-white/75">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-20 bg-black">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-white/70">Answers to the most common questions about shopping with VoltMobile.</p>
        </div>
        <div className="mt-8 grid gap-3 max-w-3xl">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
