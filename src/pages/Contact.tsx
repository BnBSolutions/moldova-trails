import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/shared/ScrollReveal';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', tour: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: '', email: '', phone: '', message: '', tour: '' });
  };

  return (
    <main className="pt-20">
      <section className="py-20 bg-primary grain">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg max-w-xl mx-auto"
          >
            Suntem aici să te ajutăm să planifici călătoria perfectă.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <ScrollReveal>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Informații de Contact</h2>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: 'Adresă', value: 'Str. Ștefan cel Mare 123,\nChișinău, Moldova' },
                    { icon: Phone, label: 'Telefon', value: '+373 60 123 456' },
                    { icon: Mail, label: 'Email', value: 'info@toptour.md' },
                    { icon: Clock, label: 'Program', value: 'Luni — Vineri: 09:00 — 18:00\nSâmbătă: 10:00 — 14:00' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-foreground text-sm whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Trimite-ne un Mesaj</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Nume complet</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Ion Popescu"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="ion@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="+373..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Tur de interes</label>
                        <select
                          value={form.tour}
                          onChange={(e) => setForm({ ...form, tour: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        >
                          <option value="">Selectează un tur</option>
                          <option value="vinicol">Tur Vinicol</option>
                          <option value="cultural">Tur Cultural</option>
                          <option value="aventura">Aventură</option>
                          <option value="rural">Turism Rural</option>
                          <option value="manastiri">Mănăstiri</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Mesaj</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Scrie-ne despre planurile tale de călătorie..."
                        required
                      />
                    </div>
                    <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-lg font-semibold">
                      <Send size={18} className="mr-2" /> Trimite Mesajul
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
