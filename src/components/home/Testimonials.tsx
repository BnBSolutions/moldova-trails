import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/tours';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/shared/ScrollReveal';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Testimoniale</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Ce Spun <span className="text-accent">Călătorii</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="relative bg-card border border-border rounded-3xl p-10 md:p-14">
              <Quote size={48} className="text-accent/20 absolute top-6 left-8" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-lg md:text-xl font-heading italic leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.country} — {t.tour}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-4 mt-10">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
