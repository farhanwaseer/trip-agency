/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import {
  Compass,
  Menu,
  X,
  Landmark,
  Compass as TicketIcon,
  AlertCircle,
  Heart,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "../assets/images/trip-logo.png";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  bookingCount: number;
  onOpenBookings: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
  bookingCount,
  onOpenBookings,
  favoritesCount,
  onOpenFavorites,
  theme,
  toggleTheme,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef<number>(
    typeof window !== "undefined" ? window.scrollY : 0,
  );
  const [isAfterHero, setIsAfterHero] = useState(false);

  const menuItems = [
    { id: "home", label: "Basecamp" },
    { id: "destinations", label: "Destinations" },
    { id: "tours", label: "Packages" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Observe if we've scrolled past the hero section
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsAfterHero(!entry.isIntersecting);
        });
      },
      { root: null, threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Hide on scroll down (only after leaving hero), show on scroll up
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentY > lastScrollY.current && isAfterHero) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isAfterHero]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 shadow-2xl transform transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            className="flex items-center my-8 cursor-pointer -ml-2 gap-3"
            onClick={() => handleNavClick("home")}
          >
            {/* <div className="bg-brand-orange/20 p-2 rounded-lg border border-brand-orange/40 text-brand-orange shadow-inner shadow-brand-orange/20"> */}
            <div className=" ">
              {/* <Compass className="w-6 h-6 animate-spin-slow" /> */}
              <img src={Logo} alt="logo" className="w-17 h-18" />
            </div>
            <div>
              <span className="font-display font-bold  text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                ASTRA VIA
                {/* <span className="text-xs font-mono font-medium px-1.5 py-0.5 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange rounded">EXP</span> */}
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                Islamabad
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg font-sans text-sm  font-medium drop-shadow-sm tracking-wide transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-brand-orange bg-white/5 border border-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5 border  border-transparent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions Bar */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Live Ticker Indicator */}
            <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider">
                LIVE RECON
              </span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-brand-orange hover:border-brand-orange/40 transition-all cursor-pointer"
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-400" />
              )}
            </button>

            {/* Favorites Icon */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-red-400 hover:border-red-500/40 transition-all cursor-pointer"
              title="Favorite Expeditions"
            >
              <Heart
                className={`w-5 h-5 ${favoritesCount > 0 ? "fill-red-500 text-red-500" : "fill-red-500 text-red-500"}`}
              />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-mono text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-slate-950 animate-bounce">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Bookings/Tickets */}
            <button
              onClick={onOpenBookings}
              className="relative flex items-center space-x-2 px-4 py-2 bg-brand-orange/10 hover:bg-brand-orange/20 border border-brand-orange/30 text-brand-orange hover:text-white rounded-lg font-sans text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer"
            >
              <TicketIcon className="w-4 h-4" />
              <span>My Itineraries</span>
              {bookingCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white font-mono text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-slate-950">
                  {bookingCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 transition-all cursor-pointer"
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-400" />
              )}
            </button>

            {/* Small screen actions */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-red-400 transition-all"
            >
              <Heart
                className={`w-5 h-5 ${favoritesCount > 0 ? "fill-red-500 text-red-500" : ""}`}
              />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white font-mono text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenBookings}
              className="relative p-2 rounded-lg bg-brand-orange/10 border border-brand-orange/20 text-brand-orange"
            >
              <TicketIcon className="w-5 h-5" />
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-white font-mono text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {bookingCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/5 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-sans text-base font-medium transition-all ${
                    activeSection === item.id
                      ? "text-brand-orange bg-brand-orange/10 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 pb-2 px-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  RECON ONLINE
                </span>
                <span className="font-mono text-xs text-slate-500">
                  Departures Daily
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
