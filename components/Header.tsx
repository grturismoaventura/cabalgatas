'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Main navigation */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            {/* Logo */}
            <div className={styles.logo}>
              <img src="/logoGr.png" alt="GR Turismo" />
            </div>

            {/* Desktop Navigation */}
            <ul className={styles.navLinks}>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#cabalgatas">Cabalgatas</a></li>
              <li><a href="#transfer">Transfer</a></li>
              
            </ul>

            {/* Mobile menu button */}
            <button
              className={styles.mobileMenuButton}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <ul className={styles.mobileNavLinks}>
                <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
                <li><a href="#cabalgatas" onClick={toggleMenu}>Cabalgatas</a></li>
                <li><a href="#transfer" onClick={toggleMenu}>Transfer</a></li>
                
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}