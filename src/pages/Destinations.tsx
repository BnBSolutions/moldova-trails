import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { destinations } from '@/data/tours';
import ScrollReveal from '@/components/shared/ScrollReveal';
import heroVineyard from '@/assets/hero-vineyard.jpg';
import heroMonastery from '@/assets/hero-monastery.jpg';
import fortress from '@/assets/fortress.jpg';
import heroVillage from '@/assets/hero-village.jpg';

const destImages = [heroVineyard, heroMonastery, fortress, heroVillage];

const Destinations = () => {
  return (
    <main className="pt-20">
      <section className="py-20 bg-primary grain">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            Destinații
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-xl mx-auto"
          >
            Explorează regiunile unice ale Moldovei, fiecare cu povestea și farmecul ei.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest, i) => (
              <ScrollReveal key={dest.id} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[16/10] cursor-pointer">
                  <img
                    src={destImages[i]}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 text-accent text-sm mb-2">
                      <MapPin size={14} /> {dest.tourCount} tururi disponibile
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-primary-foreground mb-2">{dest.name}</h3>
                    <p className="text-primary-foreground/70 text-sm mb-4 max-w-md">{dest.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.attractions.map((attr) => (
                        <span key={attr} className="text-xs px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/80">
                          {attr}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/tours"
                      className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all"
                    >
                      Explorează Tururi <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destinations;
