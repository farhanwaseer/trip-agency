/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Search, MapPin, Compass, ShieldAlert, ArrowRight, Activity, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPEDITION_ALERTS, DESTINATIONS } from '../data';

interface HeroSectionProps {
  onSearch: (destinationId: string, category: string) => void;
  onExploreTours: () => void;
}

export default function HeroSection({ onSearch, onExploreTours }: HeroSectionProps) {
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const BACKGROUND_IMAGES = [
    // '/src/assets/images/hero_mountain_1784037773882.jpg', // Original beautiful Passu cones/Karakoram
    'https://images.unsplash.com/photo-1621244249243-436b79b5eea8?auto=format&fit=crop&w=2000&q=90', // Passu Cones golden hour
    'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=2000&q=90', // Turquoise Attabad Lake
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=90', // Nanga Parbat majestic face
    'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=2000&q=90'  // Skardu high-altitude mirror water
  ];

  // Auto-scrolling live expedition alerts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlertIndex((prev) => (prev + 1) % EXPEDITION_ALERTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-changing backdrop slideshow
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4500);
    return () => clearInterval(bgInterval);
  }, []);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(selectedDestination, selectedCategory);
    // Smooth scroll down to tours list
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categoriesList = [
    'Student Trips',
    'Adventure Tours',
    'Camping Tours',
    'Hiking Expeditions',
    'Photography Tours',
    'Family & Corporate'
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-16 sm:pt-20 overflow-hidden">
      
      {/* Background Image with Parallax Style Deep Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentBgIndex}
            src={BACKGROUND_IMAGES[currentBgIndex]}
            alt="Karakoram Mountain Scene"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-75 contrast-105"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-transparent hidden md:block z-10"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center pt-12 pb-8">
        
        {/* Expedition Status Banner */}
        <div className="mb-6 inline-flex max-w-lg self-start">
          <div className="flex items-center space-x-2.5 bg-slate-950/80 backdrop-blur-md border border-brand-orange/30 px-3.5 py-1.5 rounded-full shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              Basecamp Status: Departures fully active to Hunza & Skardu
            </span>
          </div>
        </div>

        {/* Cinematic Headers */}
        <div className="max-w-3xl">
          <span className="block font-mono text-xs sm:text-sm font-bold tracking-[0.4em] text-brand-orange uppercase mb-3">
            ADVENTURE TOURISM | ISLAMABAD, PK
          </span>
          <h1 className="font-display font-light text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[1.0] mb-6 drop-shadow-lg">
            The Wild <br className="hidden sm:inline" />
            <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-amber-200">
              Karakoram
            </span>
          </h1>
          <p className="font-sans text-sm sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl drop-shadow">
            Experience the majestic vertical towers, cosmic starry plains, and raging turquoise lakes of Northern Pakistan. Hand-crafted, all-inclusive small group expeditions departing from Islamabad, engineered for travelers aged 18–35.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button
              onClick={onExploreTours}
              className="px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-amber hover:shadow-lg hover:shadow-brand-orange/20 text-white rounded-lg font-sans font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>Explore Expeditions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#customizer"
              className="px-8 py-4 bg-slate-950/60 hover:bg-slate-900 border border-white/10 hover:border-brand-orange/40 text-slate-200 hover:text-white rounded-lg font-sans font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 transition-all"
            >
              <Compass className="w-4 h-4 text-brand-orange" />
              <span>Configure Custom Trip</span>
            </a>
          </div>
        </div>

        {/* Quick Travel Finder Widget (Bento Style) */}
        <form onSubmit={handleQuickSearch} className="w-full max-w-4xl bg-slate-950/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Destination Field */}
            <div className="relative">
              <label className="block text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase mb-1.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-orange" /> DESTINATION TARGET
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-slate-900/80 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange transition-all font-sans cursor-pointer"
              >
                <option value="">Search all destinations...</option>
                {DESTINATIONS.map((dest) => (
                  <option key={dest.id} value={dest.id}>
                    {dest.name} ({dest.elevation})
                  </option>
                ))}
              </select>
            </div>

            {/* Category / Vibe Field */}
            <div className="relative">
              <label className="block text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase mb-1.5 flex items-center gap-1">
                <Compass className="w-3 h-3 text-brand-orange" /> TRIP STYLE / VIBE
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-900/80 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange transition-all font-sans cursor-pointer"
              >
                <option value="">Any expedition style...</option>
                {categoriesList.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Form Submit Search */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full h-[42px] bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg font-sans font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Basecamp Files</span>
              </button>
            </div>

          </div>
        </form>

      </div>

      {/* Live Tactical Feed Ticker Footer */}
      <div className="relative z-10 w-full border-t border-white/5 bg-slate-950/90 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between space-y-2.5 md:space-y-0">
          <div className="flex items-center space-x-2 text-brand-orange">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" /> RECON FIELD TELEMETRY
            </span>
          </div>

          {/* Cycling alert */}
          <div className="flex-grow md:mx-8 h-8 relative overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAlertIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center space-x-2 text-xs sm:text-sm font-sans font-medium text-slate-300"
              >
                <span className="text-brand-amber font-mono font-bold">[{EXPEDITION_ALERTS[currentAlertIndex].teamName} @ {EXPEDITION_ALERTS[currentAlertIndex].location} - {EXPEDITION_ALERTS[currentAlertIndex].altitude}]:</span>
                <span className="truncate italic">"{EXPEDITION_ALERTS[currentAlertIndex].message}"</span>
                <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap">({EXPEDITION_ALERTS[currentAlertIndex].timestamp})</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-[11px] font-mono text-slate-500">
            <span>ISLAMABAD BASE: 33.7294° N, 73.0931° E</span>
            <span>TEMP: 26°C Clear</span>
          </div>
        </div>
      </div>

    </section>
  );
}
