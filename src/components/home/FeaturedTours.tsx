import { Link } from 'react-router-dom';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { tours } from '@/data/tours';
import ScrollReveal from '@/components/shared/ScrollReveal';
import heroWineCellar from '@/assets/hero-wine-cellar.jpg';
import heroMonastery from '@/assets/hero-monastery.jpg';
import wineTasting from '@/assets/wine-tasting.jpg';
import heroVillage from '@/assets/hero-village.jpg';
import fortress from '@/assets/fortress.jpg';
import localFood from '@/assets/local-food.jpg';

const imageMap: Record<string, string> = {
  '/hero-wine-cellar.jpg': heroWineCellar,
  '/hero-monastery.jpg': heroMonastery,
  '/wine-tasting.jpg': wineTasting,
  '/hero-village.jpg': heroVillage,
  '/fortress.jpg': fortress,
  '/local-food.jpg': localFood,
};

const featured = tours.slice(0, 3);

const FeaturedTours = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-end justify-between mb-14">
            <div>
              <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Tururi populare</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Experiențe de <span className="text-accent">Neuitat</span>
              </h2>
            </div>
            <Link
              to="/tours"
              className="mt-4 md:mt-0 flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              Vezi toate tururile <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((tour, i) => (
            <ScrollReveal key={tour.id} delay={i * 0.1}>
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
        </div>
      </div>
    </section>
  );
};

export { imageMap };
export default FeaturedTours;
