'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Planets', path: '/planets' },
    { name: 'About', path: '/about' },
    { name: 'Waitlist', path: '/waitlist' },
  ];

  if (!mounted) return null;

  return (
    <motion.nav 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 6 }}
    className="fixed z-20 top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-900 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-6 py-3 shadow-lg">
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === item.path
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.name}
              {(pathname === item.path || hovered === item.name) && (
                <span className="block bg-white rounded-full mt-1 transition-all duration-300" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavBar;