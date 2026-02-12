import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Mountain, Star, Check, X, MapPin, ChevronRight } from 'lucide-react';
import { tours } from '@/data/tours';
import { imageMap } from '@/components/home/FeaturedTours';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/shared/ScrollReveal';

const TourDetail = () => {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground">Turul nu a fost găsit</h1>
        <Link to="/tours" className="text-accent mt-4 inline-block">← Înapoi la tururi</Link>
      </main>
    );
  }

  const img = imageMap[tour.image] || tour.image;

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={img} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 z-10">
          <div className="container mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-4">
              <Link to="/" className="hover:text-accent transition-colors">Acasă</Link>
              <ChevronRight size={14} />
              <Link to="/tours" className="hover:text-accent transition-colors">Tururi</Link>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">{tour.title}</span>
            </nav>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2"
            >
              {tour.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
              <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {tour.categoryLabel}
              </span>
              <span className="flex items-center gap-1"><Clock size={14} /> {tour.duration}</span>
              <span className="flex items-center gap-1"><Star size={14} className="text-accent fill-accent" /> {tour.rating} ({tour.reviewCount} recenzii)</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {tour.region}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Despre Tur</h2>
                  <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
                </div>
              </ScrollReveal>

              {/* Highlights */}
              <ScrollReveal>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Puncte Cheie</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tour.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <Check size={16} className="text-accent" />
                        </div>
                        <span className="text-sm text-foreground">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Itinerary */}
              <ScrollReveal>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Itinerariu</h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((day) => (
                      <div key={day.day} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shrink-0">
                            Z{day.day}
                          </div>
                          {day.day < tour.itinerary.length && (
                            <div className="w-0.5 flex-1 bg-border mt-2" />
                          )}
                        </div>
                        <div className="pb-6">
                          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{day.title}</h3>
                          <p className="text-muted-foreground text-sm">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Included */}
              <ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">Inclus</h3>
                    <ul className="space-y-2">
                      {tour.included.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                          <Check size={16} className="text-accent" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">Nu este inclus</h3>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <X size={16} className="text-destructive" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-card border border-border rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm">Preț de la</p>
                  <p className="font-heading text-4xl font-bold text-accent">{tour.priceEur}€</p>
                  <p className="text-muted-foreground text-xs">~{tour.priceMdl} MDL / persoană</p>
                </div>

                <div className="space-y-4 mb-6 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground flex items-center gap-2"><Clock size={14} /> Durată</span>
                    <span className="font-medium text-foreground">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground flex items-center gap-2"><Users size={14} /> Grup max</span>
                    <span className="font-medium text-foreground">{tour.maxGroup} pers.</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground flex items-center gap-2"><Mountain size={14} /> Dificultate</span>
                    <span className="font-medium text-foreground">{tour.difficulty}</span>
                  </div>
                </div>

                <Link to="/contact">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full py-6 text-lg font-semibold">
                    Rezervă Acum
                  </Button>
                </Link>

                <a
                  href="https://wa.me/37360123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-4 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  sau scrie-ne pe WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TourDetail;
