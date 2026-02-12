import { motion } from 'framer-motion';
import { Heart, Leaf, Award, Users } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import heroVineyard from '@/assets/hero-vineyard.jpg';
import localFood from '@/assets/local-food.jpg';

const values = [
  { icon: Heart, title: 'Pasiune', desc: 'Iubim Moldova și vrem să o arătăm lumii întregi.' },
  { icon: Leaf, title: 'Sustenabilitate', desc: 'Protejăm natura și tradițiile pentru generațiile viitoare.' },
  { icon: Award, title: 'Excelență', desc: 'Fiecare tur este creat cu atenție la cele mai mici detalii.' },
  { icon: Users, title: 'Comunitate', desc: 'Susținem comunitățile locale și meșteșugarii tradiționali.' },
];

const About = () => {
  return (
    <main className="pt-20">
      <section className="py-20 bg-primary grain">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            Despre Noi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-xl mx-auto"
          >
            Povestea Top Tour — cum am început și de ce facem ceea ce facem.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="image-zoom rounded-2xl">
                <img src={heroVineyard} alt="Vineyards of Moldova" className="w-full rounded-2xl" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Povestea noastră</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Din Pasiune pentru <span className="text-accent">Moldova</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Top Tour s-a născut în 2015 din dorința de a arăta lumii adevărata Moldovă — nu doar destinația de pe hartă,
                    ci sufletul ei. Am început cu un singur tur vinicol și un vis mare: să facem din Moldova o destinație turistică
                    de referință în Europa de Est.
                  </p>
                  <p>
                    Astăzi, cu peste 10.000 de turiști ghidați, suntem cea mai apreciată companie de turism local din Moldova.
                    Fiecare experiență pe care o creăm este un pod între trecutul bogat și prezentul vibrant al acestei țări minunate.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Valorile <span className="text-accent">Noastre</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-card border border-border">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <v.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team image */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Misiunea noastră</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Turism <span className="text-accent">Responsabil</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ne angajăm să practicăm un turism responsabil care susține comunitățile locale,
                  protejează mediul și păstrează tradițiile. Fiecare tur contribuie direct la economia
                  comunităților pe care le vizităm, de la micii producători de vin la meșterii tradiționali.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="image-zoom rounded-2xl">
                <img src={localFood} alt="Local food experience" className="w-full rounded-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
