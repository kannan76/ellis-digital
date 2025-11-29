"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MessageCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { id: '01', name: 'Home', href: '/' },
  { id: '02', name: 'About Us', href: '/about-us' },
  { id: '03', name: 'Courses', href: '/courses' },
  { id: '04', name: 'Gallery', href: '/gallery' },
  { id: '05', name: 'Contact Us', href: '/contact-us' },
];

const socialLinks = [
  { Icon: Instagram, href: "https://www.instagram.com/XXXXXXXX/", label: "Instagram" },
  { Icon: MessageCircle, href: "https://wa.me/91XXXXXXXXXX", label: "WhatsApp" },
];

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-[92px] items-center justify-between px-6 lg:px-12">
          <Link href="/" aria-label="Link to the homepage">
            <span className="text-[22px] font-bold text-white tracking-wide">
              Saravanapriyan Tuition Centre
            </span>
          </Link>

          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="relative z-[101] h-8 w-8"
          >
            <span className={cn('absolute block h-0.5 w-full bg-white transition-all duration-300 ease-in-out', isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[25%]')}></span>
            <span className={cn('absolute top-1/2 block h-0.5 w-full -translate-y-1/2 bg-white transition-opacity duration-300 ease-in-out', isMenuOpen && 'opacity-0')}></span>
            <span className={cn('absolute block h-0.5 w-full bg-white transition-all duration-300 ease-in-out', isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-[25%]')}></span>
          </button>
        </div>
      </header>
      
      <div 
        className={cn(
            'fixed top-0 right-0 w-full h-dvh bg-black/[.98] z-[100] transition-transform duration-500 ease-in-out transform-gpu',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        onClick={() => setIsMenuOpen(false)}
        >
        <nav 
          className="relative w-full h-full flex flex-col justify-center items-start pl-6 pr-12 pt-24 pb-32 md:pl-24"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-1 md:space-y-3">
            {navItems.map((item) => (
              <div key={item.id}>
                <div className="overflow-hidden">
                   <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-baseline group text-4xl md:text-5xl font-light text-white transition-all duration-300 ease-in-out hover:text-white/80"
                  >
                    <span className="text-sm mr-4 text-muted-foreground">{item.id}</span>
                    <span className="block transition-transform duration-300 group-hover:translate-x-3">
                      {item.name}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-12 left-6 md:left-24 flex items-center space-x-6">
             {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white transition-transform hover:scale-110 hover:text-accent-cyan"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
          </div>
        </nav>
      </div>
    </>
  );
}
