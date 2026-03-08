
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-blue-900/50 py-3' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            {/* Atalanta Logo */}
            <img
              src="atalanta-logo.avif"
              alt="Atalanta BC"
              className="h-14 w-auto object-contain drop-shadow-lg"
            />

            {/* Ribo Branding */}
            <div className="flex items-center gap-2 border-l border-white/20 pl-6 h-10">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Powered by</span>
              <img
                src="logo-ribo-2023.png"
                alt="Ribo"
                className="h-5 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6 lg:gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm uppercase tracking-widest font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-black py-12 border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-base">© 2026 Atalanta BC AI Strategy - Confidential Document</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
