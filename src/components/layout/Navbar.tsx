'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-12 py-4 flex items-center justify-between bg-black/50 backdrop-blur-md sticky top-0 z-50 mt-4">
      {/* Logo */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
      <div className="text-white font-bold text-lg">
        <Link href="/">
          <img
          title="Logo"
          src="/img/logos/proyectaw.png"
          alt="Logo Proyecta"
          className="object-contain w-[75px] md:w-[120px] h-auto"
          />
        </Link>
      </div>
      </motion.div>

      {/* Desktop links */}
      <motion.div
        className="hidden md:flex gap-6 text-red-500 font-semibold tracking-wide"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
      <div className="hidden md:flex gap-6 text-white font-medium">
        <Link href="/proyectos">
        <span className="text-red-500 hover:text-gray-100 transition cursor-pointer text-sm md:text-4xl">
            What
        </span>
        </Link>
        <Link href="/nosotros">
        <span className="text-red-500 hover:text-gray-100 transition cursor-pointer text-sm md:text-4xl">
            We
        </span>
        </Link>
        <Link href="/contacto">
        <span className="text-red-500 hover:text-gray-100 transition cursor-pointer text-sm md:text-4xl">
            Do
        </span>
        </Link>
      </div>
      </motion.div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center py-4 gap-4 font-medium md:hidden">
          <Link href="/proyectos" onClick={() => setMenuOpen(false)}>
            <span className="text-gray-100 hover:text-red-500 transition cursor-pointer text-lg md:text-4xl">What</span>
          </Link>
          <Link href="/nosotros" onClick={() => setMenuOpen(false)}>
            <span className="text-gray-100 hover:text-red-500 transition cursor-pointer text-lg md:text-4xl">We</span>
          </Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)}>
            <span className="text-gray-100 hover:text-red-500 transition cursor-pointer text-lg md:text-4xl">Do</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
