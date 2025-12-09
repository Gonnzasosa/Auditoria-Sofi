import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setIsMenuOpen(false);
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', ' ');
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-shadow-bg/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-2 group"
        >
          <Shield className="w-8 h-8 text-shadow-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all" />
          <span className="text-2xl font-bold tracking-tight text-white">
            Shadow<span className="text-shadow-cyan">IA</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-shadow-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#servicios"
            onClick={(e) => handleNavClick(e, '#servicios')}
            className="px-5 py-2.5 rounded border border-shadow-cyan text-shadow-cyan font-semibold text-sm hover:bg-shadow-cyan hover:text-shadow-bg transition-all shadow-[0_0_10px_rgba(0,229,255,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            Auditar Ahora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-shadow-cyan transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-shadow-bg border-b border-slate-800 animate-fade-in-down absolute w-full top-20 left-0">
          <nav className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-300 hover:text-shadow-cyan transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#servicios"
              className="w-full text-center py-3 rounded bg-shadow-cyan text-shadow-bg font-bold hover:bg-shadow-cyanHover transition-all"
              onClick={(e) => handleNavClick(e, '#servicios')}
            >
              Solicitar Auditoría
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};