import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 w-full flex justify-center px-4 pt-4 z-50">
      <nav className={`w-[85%] max-w-6xl bg-black/40 backdrop-blur-xl 
        border border-white/10 shadow-lg shadow-purple-500/5
        rounded-2xl transition-all duration-300`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src="images/img.png" alt="Logo" className="h-8 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/technology">Technology</NavLink>
              <NavLink to="/impact">Impact</NavLink>
              <NavLink to="/team">Team</NavLink>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Link 
                to="/contact"
                className="px-6 py-2.5 
                          bg-gradient-to-r from-purple-600 to-pink-600
                          hover:from-pink-600 hover:to-purple-600
                          rounded-xl text-white font-medium
                          transition-all duration-500
                          hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20
                          active:scale-95"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X className="w-6 h-6 text-white" /> : 
                <Menu className="w-6 h-6 text-white" />
              }
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`hover:text-purple-400 transition-colors duration-200
        ${isActive ? 'text-purple-400' : 'text-white'}
        font-medium`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block py-2 hover:text-purple-400 transition-colors duration-200 ${
        isActive ? 'text-purple-400' : 'text-white'
      }`}
    >
      {children}
    </Link>
  );
}