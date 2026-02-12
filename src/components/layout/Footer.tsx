import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              Top<span className="text-accent">Tour</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Descoperă Moldova Autentică. Tururi vinicole, culturale și de aventură create cu pasiune și dedicare din 2015.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navigare</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {[
                { label: 'Tururi', href: '/tours' },
                { label: 'Destinații', href: '/destinations' },
                { label: 'Despre Noi', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Categorii Tururi</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {['Tururi Vinicole', 'Tururi Culturale', 'Aventură', 'Turism Rural', 'Mănăstiri'].map((cat) => (
                <li key={cat}>
                  <Link to="/tours" className="hover:text-accent transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Str. Ștefan cel Mare 123, Chișinău, Moldova</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+37360123456" className="hover:text-accent transition-colors">+373 60 123 456</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@toptour.md" className="hover:text-accent transition-colors">info@toptour.md</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2026 Top Tour. Toate drepturile rezervate.</p>
          <p>Partener Oficial al Turismului din Moldova</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
