import { Users, Sparkles, Shield, Headphones } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

const features = [
  {
    icon: Users,
    title: 'Ghizi Locali',
    description: 'Ghizii noștri sunt moldoveni pasionați care cunosc fiecare colț al țării.',
  },
  {
    icon: Sparkles,
    title: 'Experiențe Autentice',
    description: 'Nu doar vizitezi — trăiești Moldova prin experiențe unice și personalizate.',
  },
  {
    icon: Shield,
    title: 'Prețuri Transparente',
    description: 'Fără costuri ascunse. Totul este inclus și comunicat clar de la început.',
  },
  {
    icon: Headphones,
    title: 'Suport 24/7',
    description: 'Suntem mereu la dispoziția ta, de la rezervare până la întoarcerea acasă.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">De ce noi</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              De Ce Să Alegi <span className="text-accent">Top Tour</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
