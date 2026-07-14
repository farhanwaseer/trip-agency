/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DESTINATIONS } from '../data';
import { Destination } from '../types';
import { MapPin, Eye, Calendar, Compass, Shield, Maximize2, X, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DestinationExplorerProps {
  onSelectDestinationForTours: (destinationId: string) => void;
}

export default function DestinationExplorer({ onSelectDestinationForTours }: DestinationExplorerProps) {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  const handleFindTours = (id: string) => {
    onSelectDestinationForTours(id);
    setSelectedDest(null);
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-24 bg-transparent relative overflow-hidden">
      
      {/* Decorative wilderness grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      {/* Absolute glow balls */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a365d]/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#7c2d12]/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section with rugged coordinates */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full mb-4">
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-brand-orange uppercase flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> RECON FIELD INDEX: 08 DEPLOYMENT ZONES
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mb-4">
            CHOOSE YOUR <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-amber">Wilderness</span>
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            From the high glacier valleys of Hunza to the windswept grasslands of Deosai, explore the diverse, epic geological wonders of Pakistan’s Northern Areas.
          </p>
        </div>

        {/* Dynamic Bento Grid of 8 destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest, idx) => {
            // Let's vary the grid span slightly to create a premium bento grid feel
            // e.g. indices 0 and 3 are double-width on tablet/desktop to create a rhythm
            const isWide = idx === 0 || idx === 3 || idx === 7;
            
            return (
              <motion.div
                key={dest.id}
                whileHover={{ y: -6 }}
                className={`group relative h-[360px] rounded-2xl overflow-hidden glass-panel border border-white/5 shadow-xl transition-all duration-300 flex flex-col justify-end cursor-pointer ${
                  isWide ? 'sm:col-span-2' : 'sm:col-span-1'
                }`}
                onClick={() => setSelectedDest(dest)}
              >
                {/* Visual Background */}
                <div className="absolute inset-0">
                  <img
                    src={dest.coverImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent"></div>
                </div>

                {/* Corner Quick Info Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="bg-slate-950/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md font-mono text-[10px] tracking-wide text-slate-300 uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-orange" /> {dest.elevation}
                  </span>
                  
                  <span className="opacity-0 group-hover:opacity-100 bg-brand-orange text-white p-2 rounded-lg border border-brand-orange/40 transition-all shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Destination Branding Context */}
                <div className="relative p-6 z-10">
                  <span className="text-[10px] font-mono tracking-widest text-brand-orange font-bold uppercase block mb-1">
                    {dest.coordinates}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 leading-tight group-hover:text-brand-orange transition-all">
                    {dest.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-2 mb-3">
                    {dest.description}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-brand-orange">
                    <span>EXPLORE INTEL</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Modal Drawer View for selected destination */}
        <AnimatePresence>
          {selectedDest && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                onClick={() => setSelectedDest(null)}
              ></motion.div>

              {/* Drawer Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 30 }}
                className="relative bg-[#090d16] border border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto"
              >
                
                {/* Left Visual Side */}
                <div className="md:w-1/2 relative h-[250px] md:h-auto min-h-[300px]">
                  <img
                    src={selectedDest.coverImage}
                    alt={selectedDest.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent"></div>
                  
                  {/* Floating Branding on Image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="font-mono text-xs font-bold text-brand-orange tracking-widest block uppercase mb-1">
                      {selectedDest.coordinates}
                    </span>
                    <h3 className="font-display font-bold text-3xl text-white">
                      {selectedDest.name}
                    </h3>
                  </div>

                  {/* Close button inside image for mobile */}
                  <button
                    onClick={() => setSelectedDest(null)}
                    className="absolute top-4 right-4 md:hidden bg-slate-950/80 p-2.5 rounded-full border border-white/10 text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Right Metadata Intel Side */}
                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                  
                  {/* Desktop close button */}
                  <div className="hidden md:flex justify-end mb-4">
                    <button
                      onClick={() => setSelectedDest(null)}
                      className="p-1.5 hover:bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-brand-orange font-bold uppercase block mb-1">
                        FIELD TAGLINE
                      </span>
                      <p className="font-sans italic text-sm text-slate-300">
                        "{selectedDest.tag}"
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-brand-orange font-bold uppercase block mb-1">
                        TERRAIN INTEL
                      </span>
                      <p className="font-sans text-sm text-slate-400 leading-relaxed">
                        {selectedDest.description}
                      </p>
                    </div>

                    {/* Stats table */}
                    <div className="grid grid-cols-2 gap-4 bg-slate-950/60 border border-white/5 p-4 rounded-xl font-mono text-xs text-slate-300">
                      <div>
                        <span className="text-[9px] text-slate-500 block">BASE ELEVATION</span>
                        <span className="font-bold text-white flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-brand-orange" /> {selectedDest.elevation}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-500 block">BEST EXPEDITION SEASON</span>
                        <span className="font-bold text-white flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-orange" /> {selectedDest.bestSeason}
                        </span>
                      </div>
                      <div className="col-span-2 pt-2 border-t border-white/5">
                        <span className="text-[9px] text-slate-500 block">ADVENTURE RATING</span>
                        <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                          <Sparkles className="w-3.5 h-3.5 text-brand-amber animate-pulse" />
                          {selectedDest.adventureTier}
                        </span>
                      </div>
                    </div>

                    {/* Key points checklist */}
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-brand-orange font-bold uppercase block mb-3">
                        EXPLORATION HIGHLIGHTS
                      </span>
                      <ul className="space-y-2">
                        {selectedDest.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                            <span className="bg-brand-orange/20 border border-brand-orange/40 h-4 w-4 rounded-full flex items-center justify-center text-brand-orange font-mono text-[9px] mt-0.5">
                              {i + 1}
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleFindTours(selectedDest.id)}
                      className="flex-1 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl py-3 font-sans font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 cursor-pointer transition-all"
                    >
                      <Compass className="w-4 h-4" />
                      <span>Show Expedition Packages</span>
                    </button>
                    <button
                      onClick={() => setSelectedDest(null)}
                      className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl font-mono text-xs border border-white/5 cursor-pointer transition-all"
                    >
                      Secure Hatch
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
