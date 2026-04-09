/**
 * Header Component - Industrial Minimalist Design
 * 
 * Design Philosophy:
 * - Fixed navigation with elegant "M" logo
 * - Subtle background on scroll
 * - Clean typography hierarchy
 * - Responsive mobile menu
 * 
 * Color Scheme: Azul escuro (#0F172A) + Branco + Accent azul (#3B82F6)
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS, COMPANY_NAME } from "@/../../shared/const";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800"
          : "bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/image-removebg-preview_ec2df7b8.png"
            alt="Masterplan Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-base font-medium text-slate-200 hover:text-orange-500 transition-colors relative group">
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          <a href="https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta." target="_blank" rel="noopener noreferrer">
            <Button
              className="hidden sm:flex bg-orange-500 hover:bg-orange-600 text-white"
              size="sm"
            >
              Entrar em Contato
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-in fade-in slide-in-from-top-2">
          <nav className="container py-4 flex flex-col gap-3">
            {NAVIGATION_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a 
              href="https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20nosso%20projeto." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-2">
                Solicitar Proposta
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
