import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/shared/ScrollReveal';
import vineyardParallax from '@/assets/vineyard-parallax.jpg';

const FeaturedExperience = () => {
  return (
    <section className="relative py-32 overflow-hidden grain">
      {/* Parallax BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${vineyardParallax})` }}
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Experiență premium</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Tururi Viticole<br />
            <span className="text-accent">Premium</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Descoperă cele mai exclusiviste crame din Moldova, degustă vinuri premiate internațional
            și trăiește povestea milenară a viticulturii moldovenești alături de ghizii noștri experți.
          </p>
          <Link to="/tours">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-lg font-semibold">
              Explorează Tururile Vinicole
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedExperience;
