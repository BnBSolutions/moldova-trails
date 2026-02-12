import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { tours, tourCategories } from '@/data/tours';
import { imageMap } from '@/components/home/FeaturedTours';
import ScrollReveal from '@/components/shared/ScrollReveal';

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState('toate');

  const filtered = activeCategory === 'toate'
    ? tours
    : tours.filter((t) => t.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-primary grain">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3"
          >
            Explorează
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            Tururile Noastre
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-lg max-w-xl mx-auto"
          >
            Alege experiența perfectă din gama noastră de tururi create cu grijă pentru tine.
          </motion.p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tourCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((tour, i) => (
              <ScrollReveal key={tour.id} delay={i * 0.05}>
                <Link
                  to={`/tour/${tour.slug}`}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={imageMap[tour.image] || tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                        {tour.categoryLabel}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <span className="text-primary-foreground font-medium text-sm flex items-center gap-1">
                        Vezi Detalii <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {tour.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{tour.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {tour.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={14} className="text-accent fill-accent" /> {tour.rating}
                        </span>
                      </div>
                      <p className="text-lg font-bold text-foreground">
                        de la <span className="text-accent">{tour.priceEur}€</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Tours;
