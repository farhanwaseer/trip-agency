/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Compass, Mail, Phone, Landmark, ShieldCheck, Heart, Clock, Footprints } from 'lucide-react';

export default function Footer() {
  const [pktTime, setPktTime] = useState('');

  // Live Pakistan Standard Time (PKT, UTC+5)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Calculate PKT by using UTC offset (UTC+5)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const pkt = new Date(utc + 3600000 * 5);
      
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
      };
      
      setPktTime(pkt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }) + ' PKT');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-transparent border-t border-white/5 pt-16 pb-8 relative overflow-hidden font-sans text-xs text-slate-400">
      
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-white/[0.015] pointer-events-none"></div>
      <div className="absolute inset-y-0 left-2/4 w-px bg-white/[0.015] pointer-events-none"></div>
      <div className="absolute inset-y-0 left-3/4 w-px bg-white/[0.015] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12 mb-12">
          
          {/* Logo & Vibe */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-brand-orange/20 p-2 rounded-lg border border-brand-orange/40 text-brand-orange">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5">
                KARAKORAM
                <span className="text-[9px] font-mono font-medium px-1.5 py-0.5 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange rounded">EXP</span>
              </span>
            </div>
            
            <p className="font-sans leading-relaxed text-slate-400 font-normal">
              Pakistan's premier luxury & student wilderness tour collective. Exploring high glacier walls, starry plains, and deep gorges. Authorized and registered under DTS License .
            </p>

            {/* Live Clock Indicator */}
            <div className="inline-flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              <span>ISB Time: {pktTime}</span>
            </div>
          </div>

          {/* Core Areas */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-widest">DEPLOYMENT BASES</h4>
            <ul className="space-y-2.5 font-sans">
              <li>
                <span className="block text-white font-semibold">Islamabad HQ</span>
                <span className="block mt-0.5"> Executive Plaza, F-7 Markaz</span>
              </li>
              <li>
                <span className="block text-white font-semibold">Gilgit Basecamp Outpost</span>
                <span className="block mt-0.5">Riverside Rd, Near River View Hotel, Gilgit</span>
              </li>
              <li>
                <span className="block text-white font-semibold">Karimabad Logistics Outpost</span>
                <span className="block mt-0.5">Fort Road, Karimabad, Hunza Valley</span>
              </li>
            </ul>
          </div>

          {/* Environmental Commitments */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-widest">ECO CHARTER</h4>
            
            <div className="flex items-start space-x-3 text-slate-400 leading-relaxed font-sans">
              <Footprints className="w-5 h-5 text-emerald-400 shrink-0" />
              <p>
                <strong>Leave No Trace:</strong> We strictly enforce garbage repatriation across Swat, Fairy Meadows, and Deosai Plains. Camps are powered by solar packs and gas burners—never local wood fires.
              </p>
            </div>

            <div className="flex items-start space-x-3 text-slate-400 leading-relaxed font-sans">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <p>
                <strong>Local Economic Share:</strong> 30% of each package cost goes directly to native Balti, Hunza, and Swati mountain guide families and environment rangers.
              </p>
            </div>
          </div>

          {/* Quick Support Channels */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-widest">SUPPORT CHANNELS</h4>
            <ul className="space-y-3 font-mono text-[11px]">
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>+92 301 240-9683</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-orange" />
                <span>deploy@karakoram-expeditions.com</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-emerald-400 font-bold uppercase text-[9px] tracking-wider">04 active squads in field</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower credit block */}
        <div className="flex flex-col md:flex-row items-center justify-between text-slate-500 text-[10px] font-mono gap-4">
          <div className="flex items-center space-x-2">
            <span>© 2026 KARAKORAM EXPEDITIONS COLLECTIVE. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded border border-white/5">
            <span className="h-1 w-1 bg-emerald-400 rounded-full"></span>
            <span>CRAFTED IN ISLAMABAD BASECAMP</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
