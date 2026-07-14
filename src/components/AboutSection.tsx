/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, ShieldCheck, Heart, Users, Target, Eye, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  imageUrl: string;
}

const TEAM: TeamMember[] = [
  {
    id: 't-1',
    name: 'Sardar Ali Jan',
    role: 'Chief High-Altitude Safety Marshal & Lead Expedition Guide',
    experience: '18+ Years',
    specialty: 'K2 & Nanga Parbat Reconnaissance',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    id: 't-2',
    name: 'Aisha Shah',
    role: 'Co-Founder & Director of Logistics & Conservation',
    experience: '10+ Years',
    specialty: 'Zero-Trace Alpine Camping Operations',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    id: 't-3',
    name: 'Farhan Sheikh',
    role: 'Lead Tactical Driver & Off-Road Fleet Captain',
    experience: '12+ Years',
    specialty: 'Raikot Bridge 오픈 Jeep Navigation',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Absolute glow highlights */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#1a365d]/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c2d12]/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 px-4 py-1.5 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-brand-orange uppercase flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> COMMAND PROFILE & AGENCY INTEL
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-5xl tracking-tight text-white mb-4">
            Our <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-amber-200">Wild Origin Story</span>
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Born from a lifelong obsession with the Karakoram, Himalaya, and Hindu Kush mountain ranges.
          </p>
        </div>

        {/* Agency Story & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Column: Mission & Vision */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl glass-panel space-y-4">
              <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block">FOUNDING HISTORY</span>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                Founded in 2018 in Islamabad, Pakistan, Karakoram Expeditions set out to bridge the gap between hardline alpine survivalism and modern high-fidelity outdoor exploration. 
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                We believe that wilderness is not merely a destination, but a space for deep internal transformation. From our local F-7 basecamp coordinates to the frozen heights of the China border, we manage every step with strict technical discipline, deep respect for indigenous communities, and an unwavering commitment to safe, reliable mountain travel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl glass-panel space-y-3">
                <div className="p-2.5 rounded-lg bg-brand-orange/10 border border-brand-orange/30 text-brand-orange w-fit">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Our Mission</h3>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  To provide sustainable, culturally immersive, and technically sound high-altitude operations that protect Pakistan’s fragile northern ecology while offering life-changing adventures.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl glass-panel space-y-3">
                <div className="p-2.5 rounded-lg bg-brand-amber/10 border border-brand-amber/30 text-brand-amber w-fit">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Our Vision</h3>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  To establish Pakistan as the leading global hub for high-altitude eco-tourism, proving that extreme mountains can be explored responsibly and shared with the entire world.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Safety Commitment */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-brand-orange/10 via-brand-amber/5 to-transparent border border-brand-orange/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full filter blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center space-x-3 text-brand-orange border-b border-white/5 pb-4">
                <ShieldCheck className="w-8 h-8 flex-shrink-0 animate-pulse" />
                <div>
                  <h3 className="font-display font-bold text-lg text-white">SAFETY COMPACT</h3>
                  <p className="font-mono text-[9px] text-slate-400 tracking-wider">ZERO-FAIL WILDERNESS DISCIPLINE</p>
                </div>
              </div>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  At extreme altitudes, there is no margin for error. We operate under a highly disciplined, safety-first paradigm:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 flex-shrink-0"></span>
                    <span><strong>Satellite Communications:</strong> Every single tactical vehicle and high camp keeps active Garmin InReach communication links live 24/7.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 flex-shrink-0"></span>
                    <span><strong>Oxygen & Trauma Kits:</strong> Emergency hyperbaric chambers, portable oxygen canisters, and advanced trauma gear are kept on site at all times.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 flex-shrink-0"></span>
                    <span><strong>Weather Radar Ground Link:</strong> Real-time satellite weather feeds are monitored hourly by our base station in Islamabad.</span>
                  </li>
                </ul>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 text-xs text-brand-amber">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 text-brand-orange" />
                  <span className="font-mono text-[11px]">All expeditions are accompanied by at least one certified Wilderness First Responder.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block mb-2">RECON FIELD AGENTS</span>
              <h3 className="font-display font-light text-2xl sm:text-4xl text-white">
                The Expedition <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-amber">Commanders</span>
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-md mt-4 sm:mt-0 leading-relaxed">
              Our team consists of certified high-altitude mountaineers, veteran drivers, and remote operations coordinators with years of combined field expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.id}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center shadow-xl glass-panel relative overflow-hidden group hover:border-brand-orange/30 transition-all duration-300"
              >
                {/* Background decorative ring */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-orange/5 rounded-full filter blur-xl group-hover:bg-brand-orange/10 transition-colors"></div>

                {/* Profile Photo */}
                <div className="w-24 h-24 rounded-full overflow-hidden border border-brand-orange/30 p-1.5 mb-6 shadow-inner relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info */}
                <span className="font-mono text-[9px] text-brand-orange font-bold tracking-widest uppercase mb-1">
                  EXP: {member.experience}
                </span>
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  {member.name}
                </h4>
                <p className="font-sans text-xs text-brand-amber font-medium mb-4">
                  {member.role}
                </p>
                
                <div className="w-full border-t border-white/5 pt-4 mt-auto">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest">TACTICAL SPECIALTY</span>
                  <p className="font-sans text-xs text-slate-300 mt-1">
                    {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
