/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRE_DEPARTURE_CHECKLIST } from '../data';
import {
  MapPin,
  Calendar,
  Compass,
  CheckSquare,
  Square,
  ShieldCheck,
  PhoneCall,
  Activity,
  Heart,
  FileText,
  AlertOctagon,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

export default function IslamabadBasecamp() {
  // Local state to track which gear items are checked off
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleToggleItem = (item: string) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((i) => i !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  const totalItems = PRE_DEPARTURE_CHECKLIST.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = checkedItems.length;
  const readyPercentage = Math.round((checkedCount / totalItems) * 100);

  return (
    <section id="basecamp-hub" className="py-24 bg-transparent relative overflow-hidden">
      
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#1a365d]/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 px-3 py-1 rounded-full mb-4">
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-brand-orange uppercase flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> DEPARTURE PROTOCOLS & LOGISTICS
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-5xl tracking-tight text-white mb-4">
            Islamabad <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-amber-200">Basecamp Hub</span>
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            All expeditions depart directly from our F-7 physical headquarters. Review briefing requirements, packing guidelines, and complete your digital gear inspection sheet below.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: Physical HQ Details & Pre-departure Briefings */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Basecamp Location Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl glass-panel relative overflow-hidden">
              <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block mb-4">BASECAMP COORDINATES</span>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-white text-sm">Physical HQ Base</h4>
                    <p className="font-sans text-xs text-slate-300 mt-1 leading-relaxed">
                      Plot 14-B, Executive Plaza, F-7 Markaz, Islamabad, Pakistan.
                    </p>
                    <span className="font-mono text-[10px] text-slate-500 block mt-1">(Opposite Safa Gold Mall bypass)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange rounded-xl shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-white text-sm">Base Commander Hotline</h4>
                    <p className="font-sans text-xs text-slate-300 mt-1">
                      +92 (051) 228-5400  •  +92 (300) 855-4011
                    </p>
                    <span className="font-mono text-[10px] text-slate-500 block mt-1">Mon-Sun 24/7 during active climbs</span>
                  </div>
                </div>
              </div>

              {/* Styled Vector Map Representation */}
              <div className="mt-8 bg-[#050505] border border-white/10 h-48 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 shadow-inner">
                
                {/* Radar sweep line */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(249,115,22,0.04)_10%,transparent_100%)] pointer-events-none"></div>
                <div className="absolute h-full w-0.5 bg-brand-orange/20 left-1/2 -translate-x-1/2 animate-pulse"></div>
                <div className="absolute w-full h-0.5 bg-brand-orange/20 top-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute w-40 h-40 border border-brand-orange/10 rounded-full animate-ping opacity-40"></div>
                <div className="absolute w-24 h-24 border border-brand-orange/25 rounded-full"></div>
                <div className="absolute w-12 h-12 border border-brand-orange/40 rounded-full"></div>

                {/* Islamabad Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                  <span className="relative flex h-3 w-3 mx-auto">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
                  </span>
                  <span className="block font-mono text-[9px] font-extrabold text-white uppercase mt-2 tracking-widest bg-slate-950/80 px-2 py-0.5 border border-brand-orange/40 rounded">ISB HQ</span>
                </div>

                {/* Northern points on map */}
                <div className="absolute top-1/4 right-1/4 text-center">
                  <span className="h-1.5 w-1.5 bg-brand-amber rounded-full block mx-auto"></span>
                  <span className="font-mono text-[8px] text-slate-500 block mt-1">HUNZA</span>
                </div>
                <div className="absolute top-1/3 left-1/3 text-center">
                  <span className="h-1.5 w-1.5 bg-brand-amber rounded-full block mx-auto"></span>
                  <span className="font-mono text-[8px] text-slate-500 block mt-1">SWAT</span>
                </div>
                <div className="absolute top-1/5 left-1/2 text-center">
                  <span className="h-1.5 w-1.5 bg-brand-amber rounded-full block mx-auto"></span>
                  <span className="font-mono text-[8px] text-slate-500 block mt-1">FAIRY MEADOWS</span>
                </div>
              </div>

            </div>

            {/* Briefing Instructions Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl glass-panel space-y-4">
              <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block">BRIEFING PROTOCOLS</span>
              
              <ul className="space-y-3.5 text-xs text-slate-300 font-sans leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Physical Fitness Briefing:</strong> Young climbers must maintain basic cardiac endurance. Be prepared for high altitudes (Hunza: 2,400m, Deosai: 4,100m).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Pre-Departure assembly:</strong> Assembly starts at 3:30 AM on departure day at F-7 HQ. Complimentary breakfast parathas & local chai served during gear loading.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero-Single-Use-Plastic Policy:</strong> Bring reusable water flasks. Karakoram Expeditions provides mountain-side safe refills. Discarding garbage on mountain trails is strictly forbidden.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* COLUMN 2: Gear Checklist Interactive Tool */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl space-y-8 shadow-2xl glass-panel">
            
            {/* Checklist header with progress bar */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/5 pb-5 mb-5">
                <div>
                  <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block">TACTICAL PACKING CHECKLIST</span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-1">Interactive Gear Sheet</h3>
                </div>
                
                {/* Progress Circle/Bar */}
                <div className="bg-slate-950 px-4 py-2 border border-white/5 rounded-2xl flex items-center space-x-3 shrink-0">
                  <div className="text-right">
                    <span className="font-mono text-[9px] text-slate-500 block uppercase">READY LEVEL</span>
                    <span className="font-mono font-bold text-brand-orange text-sm">{checkedCount} / {totalItems} Packed</span>
                  </div>
                  <div className="h-10 w-10 rounded-full border-4 border-slate-900 border-t-brand-orange flex items-center justify-center font-mono text-[10px] font-bold text-white relative">
                    {readyPercentage}%
                  </div>
                </div>
              </div>

              {/* Checklist content map */}
              <div className="space-y-6">
                {PRE_DEPARTURE_CHECKLIST.map((cat) => (
                  <div key={cat.category} className="space-y-3">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block border-b border-white/5 pb-1">
                      {cat.category}
                    </span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.items.map((item) => {
                        const isChecked = checkedItems.includes(item);
                        return (
                          <div
                            key={item}
                            onClick={() => handleToggleItem(item)}
                            className={`flex items-start space-x-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-emerald-500/5 border-emerald-500/25 text-emerald-300'
                                : 'bg-slate-950/80 border-white/5 text-slate-300 hover:border-white/10'
                            }`}
                          >
                            <span className="mt-0.5 shrink-0">
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-600 hover:text-slate-400" />
                              )}
                            </span>
                            <span className="font-sans text-xs sm:text-sm leading-tight">
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Summary advice */}
              <div className="pt-6 mt-6 border-t border-white/5">
                {readyPercentage === 100 ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/25 p-4 rounded-xl flex items-center space-x-3.5">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-sans font-bold text-emerald-300 block text-xs sm:text-sm">GEAR REPORT: 100% FLIGHT READY</span>
                      <p className="font-sans text-slate-400 text-xs mt-1">Excellent! You are thoroughly packed and ready for deployments under the Karakoram peaks. Carry hard copies of your board pass.</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-950 p-4 rounded-xl flex items-start space-x-3.5 text-xs text-slate-400">
                    <AlertOctagon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans font-semibold text-white block">Gear Checklist Notice</span>
                      <p className="mt-1 leading-relaxed">
                        Track your packing progress dynamically using this card. Ensure thermal windbreakers and broken-in ankle-support boots are checked prior to Islamabad assembly.
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
