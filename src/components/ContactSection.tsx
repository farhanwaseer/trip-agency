/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Twitter, Instagram, Globe, CheckCircle, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Expedition Query');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMsg('Please fill out all transmission fields.');
      return;
    }
    
    // Simulate successful transmission routing
    setSubmitted(true);
    setErrorMsg('');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('Expedition Query');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-white/[0.015] pointer-events-none"></div>
      <div className="absolute inset-y-0 right-1/4 w-px bg-white/[0.015] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 px-4 py-1.5 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-brand-orange uppercase flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> ESTABLISH SECURE LINK
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-5xl tracking-tight text-white mb-4">
            Connect With <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-amber-200">Basecamp HQ</span>
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Initiate communication with our F-7 Islamabad operational command desk. We typically respond within 60 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: Contact Info, WhatsApp CTA, Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters details */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl glass-panel space-y-6">
              <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block">TACTICAL COMMUNICATIONS</span>
              
              <div className="space-y-5 font-sans">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-orange flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">PHYSICAL LOCATION</h4>
                    <p className="text-sm font-medium text-white mt-1">
                      College Road, Sector F-7 Markaz
                    </p>
                    <p className="text-xs text-slate-400">
                      Islamabad, 44000, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-orange flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">EMAIL DISPATCH</h4>
                    <p className="text-sm font-medium text-white mt-1 hover:text-brand-orange transition-colors">
                      ops@karakoramexpeditions.com
                    </p>
                    <p className="text-xs text-slate-400">
                      General queries & custom group bookings
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-orange flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">VOICE COMM CHANNELS</h4>
                    <p className="text-sm font-medium text-white mt-1">
                      +92 301 2409683
                    </p>
                    <p className="text-sm font-medium text-white mt-1">
                      +92 307 3237250
                    </p>
                    <p className="text-xs text-slate-400">
                      Mon - Sat, 09:00 AM to 06:00 PM PKT
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="border-t border-white/5 pt-6">
                <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-3">SECURE FEED STREAMS</span>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all"
                  >
                    <Instagram className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/5 transition-all"
                  >
                    <Twitter className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-brand-orange hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all"
                  >
                    <Globe className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Immersive WhatsApp CTA */}
            <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-600/5 to-transparent border border-emerald-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full filter blur-xl pointer-events-none"></div>
              
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 animate-pulse">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">Direct WhatsApp Link</h4>
                  <p className="font-mono text-[9px] text-emerald-400 tracking-wider">LIVE OPERATIONAL CHATLINE</p>
                </div>
              </div>

              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Need immediate pricing, customizable group options, or help building your high-altitude equipment plan? Chat directly with an active tour operator right now.
              </p>

              <a
                href="https://wa.me/923012409683"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Start Live Conversation
              </a>
            </div>
          </div>

          {/* COLUMN 2: Contact Form & Google Map Placeholder */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Form card */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl glass-panel relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block">SECURE DISPATCH SECURE FORM</span>
                    
                    {errorMsg && (
                      <div className="p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-400 flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Sardar Zain"
                          className="w-full bg-[#050505] border border-white/10 focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors font-sans"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="zain@example.com"
                          className="w-full bg-[#050505] border border-white/10 focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Transmission Topic
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors font-sans cursor-pointer"
                      >
                        <option value="Expedition Query">General Expedition Query</option>
                        <option value="Custom Group Charter">Custom Group Charter Planning</option>
                        <option value="Corporate Retreat Profile">Corporate Retreat Proposal</option>
                        <option value="Emergency Logistics Link">Emergency Logistics / Support Link</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        placeholder="Detail your request, destination interest, or desired departure dates..."
                        className="w-full bg-[#050505] border border-white/10 focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors font-sans resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-amber text-white font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/35 cursor-pointer"
                    >
                      <Send className="w-4 h-4 mr-2" /> Route Safe Dispatch
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange rounded-full flex items-center justify-center mx-auto shadow-inner shadow-brand-orange/20">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-light text-2xl sm:text-3xl text-white">
                        Transmission Routed!
                      </h3>
                      <p className="font-mono text-[10px] text-brand-orange tracking-widest uppercase">
                        DESK COORDINATOR WILL ENGAGE SHORTLY
                      </p>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your dispatch has been registered securely on our F-7 basecamp server. An operational tactical officer is reviewing your payload.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                      Transmit New Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Immersive Google Maps Placeholder */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl glass-panel space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest">HQ SATELLITE VISUAL RADAR</span>
                <span className="font-mono text-[9px] text-slate-500">ISLAMABAD F-7 COORDS</span>
              </div>

              {/* Styled High-contrast Vector Map Graphic */}
              <div className="bg-[#050505] border border-white/10 h-64 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner">
                {/* Simulated streets / coordinates grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_2px,transparent_2px)] bg-[size:2rem_2rem]"></div>
                
                {/* Diagonal rivers / mountains vector overlays */}
                <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M-10,30 Q30,40 40,70 T110,80" fill="none" stroke="#f97316" strokeWidth="1" />
                  <path d="M-10,50 Q40,40 60,90 T110,95" fill="none" stroke="#2563eb" strokeWidth="0.5" />
                  <polygon points="10,20 30,10 50,35" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  <polygon points="40,40 60,25 80,45" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                </svg>

                {/* Simulated radar sweep */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.03)_10%,transparent_70%)]"></div>

                {/* Compass HUD decoration */}
                <div className="absolute top-4 right-4 w-12 h-12 border border-white/5 rounded-full flex items-center justify-center text-[8px] font-mono text-slate-600">
                  <span className="absolute -top-1.5 font-bold">N</span>
                  <span className="absolute -bottom-1.5 font-bold">S</span>
                  <span className="absolute -left-1.5 font-bold">W</span>
                  <span className="absolute -right-1.5 font-bold">E</span>
                  <div className="w-6 h-6 border border-dashed border-white/5 rounded-full animate-spin-slow"></div>
                </div>

                {/* HQ PIN */}
                <div className="absolute flex flex-col items-center">
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-r from-brand-orange to-brand-amber border border-white shadow-lg flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-white" />
                    </span>
                  </span>
                  <div className="mt-2 bg-black/80 border border-brand-orange/30 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-mono text-white shadow-2xl flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span>F-7 BASECAMP HQ</span>
                  </div>
                </div>

                {/* Scale & Coordinates text */}
                <div className="absolute bottom-4 left-4 bg-black/75 border border-white/10 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[8px] font-mono text-slate-400 space-y-0.5">
                  <div>LAT: 33.7215° N • LON: 73.0543° E</div>
                  <div>ALT: 540m • SATELLITE ACTIVE</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
