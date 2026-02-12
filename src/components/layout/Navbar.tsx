import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Tururi', href: '/tours' },
  { label: 'Destinații', href: '/destinations' },
  { label: 'Despre Noi', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const languages = ['RO', 'RU', 'EN'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('RO');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'glass shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome
    ? 'text-foreground'
    : 'text-primary-foreground';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className={`font-heading text-2xl font-bold tracking-tight ${textColor}`}>
            Top<span className="text-accent">Tour</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${textColor} ${
                  location.pathname === link.href ? 'text-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1 text-sm font-medium ${textColor} hover:text-accent transition-colors`}
              >
                {currentLang}
                <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setCurrentLang(lang); setLangOpen(false); }}
                        className="block w-full px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors text-left"
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact">
              <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-6">
                Rezervă Acum
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${textColor}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background pt-20"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="block py-3 text-lg font-heading font-semibold text-foreground hover:text-accent border-b border-border"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      currentLang === lang
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-foreground hover:bg-muted'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <Link to="/contact" className="mt-4">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg py-6">
                  Rezervă Acum
                </Button>
              </Link>
              <a href="tel:+37360123456" className="flex items-center gap-2 mt-4 text-muted-foreground">
                <Phone size={16} /> +373 60 123 456
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
