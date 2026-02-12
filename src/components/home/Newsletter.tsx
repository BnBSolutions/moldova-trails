import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/shared/ScrollReveal';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fii la Curent cu <span className="text-accent">Noutățile</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Abonează-te la newsletter și primește oferte exclusive, ghiduri de călătorie și noutăți despre tururile noastre.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa ta de email"
                className="flex-1 px-5 py-3 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-3 font-semibold">
                <Send size={16} className="mr-2" /> Abonează-te
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Newsletter;
