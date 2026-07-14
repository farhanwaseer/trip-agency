/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DESTINATIONS, TOURS } from '../data';
import { Tour, Booking } from '../types';
import {
  Compass,
  Calendar,
  Users,
  Award,
  DollarSign,
  Briefcase,
  Flame,
  CheckCircle,
  Truck,
  FileText,
  MapPin,
  Check,
  Shield,
  Ticket,
  ChevronRight,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveCustomizerProps {
  preSelectedTourId: string;
  setPreSelectedTourId: (id: string) => void;
  onBookingSuccess: (newBooking: Booking) => void;
}

export default function InteractiveCustomizer({
  preSelectedTourId,
  setPreSelectedTourId,
  onBookingSuccess
}: InteractiveCustomizerProps) {
  // Configurator states
  const [selectedTour, setSelectedTour] = useState<Tour>(TOURS[0]);
  const [departureDate, setDepartureDate] = useState('2026-07-28');
  const [numTravelers, setNumTravelers] = useState(1);
  const [accommodationTier, setAccommodationTier] = useState<'Backpacker Camp' | 'Cozy Lodge' | 'Glamping dome'>('Backpacker Camp');
  
  // Custom Toggles
  const [extraPhotographer, setExtraPhotographer] = useState(false);
  const [extraSitar, setExtraSitar] = useState(false);
  const [extraClimbing, setExtraClimbing] = useState(false);
  const [extraParagliding, setExtraParagliding] = useState(false);

  // Customer credentials
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<Booking | null>(null);

  // Sync state if preSelectedTourId changes
  useEffect(() => {
    if (preSelectedTourId) {
      const match = TOURS.find((t) => t.id === preSelectedTourId);
      if (match) {
        setSelectedTour(match);
      }
    }
  }, [preSelectedTourId]);

  // Set selected tour directly from dropdown
  const handleTourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const match = TOURS.find((t) => t.id === e.target.value);
    if (match) {
      setSelectedTour(match);
      setPreSelectedTourId(match.id);
    }
  };

  // Prices Calculations
  const baseCost = selectedTour.costPKR * numTravelers;
  
  const getAccommodationCostPerPerson = () => {
    if (accommodationTier === 'Cozy Lodge') return 8000;
    if (accommodationTier === 'Glamping dome') return 25000;
    return 0; // Backpacker Camp is inclusive
  };
  const accommodationCostTotal = getAccommodationCostPerPerson() * numTravelers;

  // Flats and per person extras
  const photographerCost = extraPhotographer ? 15000 : 0;
  const sitarCost = extraSitar ? 10000 : 0;
  const climbingCost = extraClimbing ? 8000 : 0;
  const paraglidingCost = extraParagliding ? 12000 * numTravelers : 0;

  const totalCostPKR = baseCost + accommodationCostTotal + photographerCost + sitarCost + climbingCost + paraglidingCost;
  const totalCostUSD = Math.round(totalCostPKR / 275);

  const handleDeployBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !customerPhone) {
      alert('Please fill out Name, Email, and Phone to generate your adventure ticket.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Build simulated ticket voucher
      const ticketCode = `KKH-${selectedTour.id.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      
      const customExtrasList: string[] = [];
      if (extraPhotographer) customExtrasList.push('Astro Photographer');
      if (extraSitar) customExtrasList.push('Local Sitar Concert & BBQ');
      if (extraClimbing) customExtrasList.push('Wild Climbing Instructor');
      if (extraParagliding) customExtrasList.push('High-Valley Paragliding');

      const newBooking: Booking = {
        id: `book-${Date.now()}`,
        customerName,
        customerEmail,
        customerPhone,
        tourId: selectedTour.id,
        tourTitle: selectedTour.title,
        departureDate,
        numTravelers,
        totalCostPKR,
        accommodationTier,
        customExtras: customExtrasList,
        notes: specialNotes,
        bookingDate: new Date().toLocaleDateString(),
        status: 'Confirmed',
        ticketCode
      };

      onBookingSuccess(newBooking);
      setBookingResult(newBooking);
      setIsSubmitting(false);

      // Clear Form
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
      setSpecialNotes('');
    }, 1500);
  };

  return (
    <section id="customizer" className="py-24 bg-transparent relative overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#1a365d]/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7c2d12]/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-4">
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-400 uppercase flex items-center gap-1.5 animate-pulse">
              <Compass className="w-3.5 h-3.5" /> EXPLORATION PLATFORM ONLINE
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-5xl tracking-tight text-white mb-4">
            Expedition <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-amber-200">Configurator</span>
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Configure your custom squad size, select outdoor logistics multipliers, toggle bespoke bonfire programs, and download your departure boarding pass instantly.
          </p>
        </div>

        {/* Master Bento Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CONFIGURATION COLUMN */}
          <form onSubmit={handleDeployBooking} className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl space-y-8 shadow-2xl glass-panel">
            
            {/* Step 1: Destination Selection */}
            <div>
              <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block mb-3">01. EXPEDITION SELECTION</span>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">TARGET ROAD TRIP PACKAGE</label>
                  <select
                    value={selectedTour.id}
                    onChange={handleTourChange}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-all font-sans cursor-pointer"
                  >
                    {TOURS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} (PKR {t.costPKR.toLocaleString()}/head)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">DEPARTURE TARGET DATE</label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-all font-mono cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">TRAVELERS SQUAD SIZE</label>
                    <div className="flex items-center space-x-3 bg-slate-950 border border-white/10 rounded-xl px-3 py-1.5">
                      <button
                        type="button"
                        onClick={() => setNumTravelers(Math.max(1, numTravelers - 1))}
                        className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer font-bold font-mono transition-all"
                      >
                        -
                      </button>
                      <span className="flex-grow text-center font-mono text-sm font-bold text-white">
                        {numTravelers} {numTravelers === 1 ? 'Traveler' : 'Travelers'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setNumTravelers(Math.min(20, numTravelers + 1))}
                        className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer font-bold font-mono transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Accommodation Tier Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block">02. FIELD LODGING LEVEL</span>
                <span className="font-mono text-[9px] text-slate-500">Upgrade changes cost per head</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Camp Option */}
                <div
                  onClick={() => setAccommodationTier('Backpacker Camp')}
                  className={`border rounded-xl p-4 cursor-pointer transition-all ${
                    accommodationTier === 'Backpacker Camp'
                      ? 'bg-brand-orange/10 border-brand-orange/50 text-white shadow-inner'
                      : 'bg-slate-950 border-white/5 text-slate-400 hover:border-white/10'
                  }`}
                >
                  <span className="font-mono text-[9px] block text-brand-orange font-bold">INCLUSIVE</span>
                  <span className="font-sans font-bold text-sm block mt-1 text-white">Backpacker Camp</span>
                  <p className="font-sans text-[11px] text-slate-400 mt-1.5 leading-relaxed">High-grade waterproof dome tents with thermal pads. Authentic wilderness.</p>
                </div>

                {/* Lodge Option */}
                <div
                  onClick={() => setAccommodationTier('Cozy Lodge')}
                  className={`border rounded-xl p-4 cursor-pointer transition-all ${
                    accommodationTier === 'Cozy Lodge'
                      ? 'bg-brand-orange/10 border-brand-orange/50 text-white shadow-inner'
                      : 'bg-slate-950 border-white/5 text-slate-400 hover:border-white/10'
                  }`}
                >
                  <span className="font-mono text-[9px] block text-brand-amber font-bold">+PKR 8,000 / head</span>
                  <span className="font-sans font-bold text-sm block mt-1 text-white">Cozy Lodge Rooms</span>
                  <p className="font-sans text-[11px] text-slate-400 mt-1.5 leading-relaxed">Rustic local stone guest-houses with heating radiators and private baths.</p>
                </div>

                {/* Dome Option */}
                <div
                  onClick={() => setAccommodationTier('Glamping dome')}
                  className={`border rounded-xl p-4 cursor-pointer transition-all ${
                    accommodationTier === 'Glamping dome'
                      ? 'bg-brand-orange/10 border-brand-orange/50 text-white shadow-inner'
                      : 'bg-slate-950 border-white/5 text-slate-400 hover:border-white/10'
                  }`}
                >
                  <span className="font-mono text-[9px] block text-brand-orange font-bold">+PKR 25,000 / head</span>
                  <span className="font-sans font-bold text-sm block mt-1 text-white">Glamping Dome</span>
                  <p className="font-sans text-[11px] text-slate-400 mt-1.5 leading-relaxed">Ultra-luxury heated geodesic glass domes facing the high peaks.</p>
                </div>
              </div>
            </div>

            {/* Step 3: Bespoke Multipliers */}
            <div>
              <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block mb-3">03. BESPOKE EXPEDITION MULTIPLIERS</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Photo */}
                <label className="flex items-center justify-between p-3.5 bg-slate-950/60 border border-white/5 rounded-xl cursor-pointer hover:border-white/10 transition-all">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={extraPhotographer}
                      onChange={(e) => setExtraPhotographer(e.target.checked)}
                      className="accent-brand-orange h-4 w-4 rounded"
                    />
                    <div>
                      <span className="font-sans font-semibold text-xs text-slate-200 block">Personal Astro-Photographer</span>
                      <span className="font-mono text-[9px] text-slate-500">Full group photo portfolios & Astro training</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-brand-orange font-bold">+15k</span>
                </label>

                {/* Sitar */}
                <label className="flex items-center justify-between p-3.5 bg-slate-950/60 border border-white/5 rounded-xl cursor-pointer hover:border-white/10 transition-all">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={extraSitar}
                      onChange={(e) => setExtraSitar(e.target.checked)}
                      className="accent-brand-orange h-4 w-4 rounded"
                    />
                    <div>
                      <span className="font-sans font-semibold text-xs text-slate-200 block">Sitar Concert & Trout BBQ</span>
                      <span className="font-mono text-[9px] text-slate-500">Private local musician campfire program</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-brand-orange font-bold">+10k</span>
                </label>

                {/* Climbing */}
                <label className="flex items-center justify-between p-3.5 bg-slate-950/60 border border-white/5 rounded-xl cursor-pointer hover:border-white/10 transition-all">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={extraClimbing}
                      onChange={(e) => setExtraClimbing(e.target.checked)}
                      className="accent-brand-orange h-4 w-4 rounded"
                    />
                    <div>
                      <span className="font-sans font-semibold text-xs text-slate-200 block">Climbing Safety Specialist</span>
                      <span className="font-mono text-[9px] text-slate-500">Ropes, harnesses, and custom cliff rappelling</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-brand-orange font-bold">+8k</span>
                </label>

                {/* Paragliding */}
                <label className="flex items-center justify-between p-3.5 bg-slate-950/60 border border-white/5 rounded-xl cursor-pointer hover:border-white/10 transition-all">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={extraParagliding}
                      onChange={(e) => setExtraParagliding(e.target.checked)}
                      className="accent-brand-orange h-4 w-4 rounded"
                    />
                    <div>
                      <span className="font-sans font-semibold text-xs text-slate-200 block">Hunza Glider Paragliding</span>
                      <span className="font-mono text-[9px] text-slate-500">Glide tandem with certified pilot from Duikar</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-brand-orange font-bold">+12k/head</span>
                </label>
              </div>
            </div>

            {/* Step 4: Personal Credentials */}
            <div>
              <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block mb-3">04. SOLDIER CREDENTIALS</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 mb-1 uppercase">FULL LEGAL NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Zain Malik"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-orange transition-all font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 mb-1 uppercase">SECURE EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="zain@domain.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-orange transition-all font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 mb-1 uppercase">WHATSAPP CONTACT</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g., 0321-1234567"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-orange transition-all font-mono"
                  />
                </div>
                <div className="col-span-1 sm:col-span-3">
                  <label className="block text-[10px] font-mono text-slate-500 mb-1 uppercase">SPECIAL FOOD / MEDICAL DIETARY NOTES</label>
                  <textarea
                    placeholder="Altitude allergies, vegetarian requests, knee sensitivity..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    rows={2}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-orange transition-all font-sans"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submission triggers */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-2 text-slate-400 text-xs">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Encrypted secure deployment via F-7 Base. No advance card needed.</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl font-sans font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-brand-orange/20"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>GENERATING boarding pass...</span>
                  </span>
                ) : (
                  <>
                    <Ticket className="w-4 h-4" />
                    <span>SECURE BOARDING PASS</span>
                  </>
                )}
              </button>
            </div>

          </form>

          {/* DYNAMIC BILLING STATEMENT PANEL */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Pricing Breakdown Statement */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl glass-panel relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full filter blur-xl"></div>
              
              <h3 className="font-display font-bold text-base text-white border-b border-white/5 pb-4 mb-4 flex items-center justify-between">
                <span>TACTICAL BILLING STATEMENT</span>
                <span className="font-mono text-xs text-brand-orange">ID: {selectedTour.id.toUpperCase()}</span>
              </h3>

              {/* Day breakdown */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-sans">
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-semibold block text-white">{selectedTour.title}</span>
                    <span className="text-[10px] font-mono text-slate-500">
                      Base rate PKR {selectedTour.costPKR.toLocaleString()} × {numTravelers} Travelers
                    </span>
                  </div>
                  <span className="font-mono font-bold text-white">
                    PKR {baseCost.toLocaleString()}
                  </span>
                </div>

                {/* Accommodation */}
                {accommodationTier !== 'Backpacker Camp' && (
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-semibold block text-white">Lodging: {accommodationTier}</span>
                      <span className="text-[10px] font-mono text-slate-500">
                        Upgrade rate PKR {getAccommodationCostPerPerson().toLocaleString()} × {numTravelers}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-brand-amber">
                      +PKR {accommodationCostTotal.toLocaleString()}
                    </span>
                  </div>
                )}

                {/* Photographer */}
                {extraPhotographer && (
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-semibold block text-white">Personal Astro-Photographer</span>
                      <span className="text-[10px] font-mono text-slate-500">Group wide ND landscape & celestial logs</span>
                    </div>
                    <span className="font-mono font-bold text-brand-amber">+PKR 15,000</span>
                  </div>
                )}

                {/* Sitar */}
                {extraSitar && (
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-semibold block text-white">Camping Trout BBQ & Sitar Concert</span>
                      <span className="text-[10px] font-mono text-slate-500">Classical campfire melody and grilled trout dinner</span>
                    </div>
                    <span className="font-mono font-bold text-brand-amber">+PKR 10,000</span>
                  </div>
                )}

                {/* Climbing */}
                {extraClimbing && (
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-semibold block text-white">Certified Climbing Instructor</span>
                      <span className="text-[10px] font-mono text-slate-500">Rappelling harness gear & safety setup</span>
                    </div>
                    <span className="font-mono font-bold text-brand-amber">+PKR 8,000</span>
                  </div>
                )}

                {/* Paragliding */}
                {extraParagliding && (
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-semibold block text-white">Duikar Glide Paragliding</span>
                      <span className="text-[10px] font-mono text-slate-500">Tandem flight PKR 12,000 × {numTravelers}</span>
                    </div>
                    <span className="font-mono font-bold text-brand-amber">
                      +PKR {paraglidingCost.toLocaleString()}
                    </span>
                  </div>
                )}

              </div>

              {/* Dynamic total tally */}
              <div className="pt-6 border-t border-dashed border-white/10 mt-6 flex justify-between items-center">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 block">TOTAL INVESTMENT VALUE</span>
                  <span className="font-display font-extrabold text-white text-xl sm:text-2xl">
                    PKR {totalCostPKR.toLocaleString()}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 block mt-0.5">
                    Est. Exchange USD ${totalCostUSD}
                  </span>
                </div>
                
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg text-emerald-400 text-center font-mono">
                  <span className="text-[9px] block text-slate-500 uppercase font-semibold">Basecamp Fee</span>
                  <span className="text-xs font-bold font-mono">0% Booking tax</span>
                </div>
              </div>

            </div>

            {/* Tactical Travel Briefing alert */}
            <div className="bg-slate-950/60 border border-white/5 rounded-2xl p-4 flex space-x-3.5 text-xs text-slate-400 font-sans">
              <Info className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Boarding Pass Issuance</span>
                <p className="mt-1 leading-relaxed">
                  Upon clicking "Deploy boarding pass", our system issues a digital boarding ticket instantly. Present this ticket at the F-7 Islamabad Hub for pre-departure briefing and safety gear checkout.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* TICKET SUCCESS POPUP VOUCHER */}
        <AnimatePresence>
          {bookingResult && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
                onClick={() => setBookingResult(null)}
              ></motion.div>

              {/* Custom boarding pass ticket ticket design */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-gradient-to-br from-slate-950 to-[#090d16] border border-brand-orange/40 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl z-10 p-6 sm:p-8 font-sans"
              >
                {/* Glowing borders */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 to-transparent pointer-events-none"></div>

                <div className="flex justify-between items-start border-b border-white/10 pb-5 mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-brand-orange text-white rounded-lg">
                      <Ticket className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-brand-orange font-bold uppercase tracking-wider block">OFFICIAL BOARDING PASS</span>
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">KARAKORAM EXPEDITIONS</h3>
                    </div>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-mono text-[10px] font-bold">
                    {bookingResult.status}
                  </span>
                </div>

                {/* Ticket layout body */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-900/60 border border-white/5 rounded-2xl p-5 mb-5 font-mono text-xs text-slate-300">
                  
                  <div className="col-span-2">
                    <span className="text-slate-500 block text-[9px] uppercase">LEAD EXPLORER</span>
                    <span className="text-white font-bold block mt-0.5 truncate">{bookingResult.customerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">SQUAD SIZE</span>
                    <span className="text-white font-bold block mt-0.5">{bookingResult.numTravelers} {bookingResult.numTravelers === 1 ? 'Traveler' : 'Travelers'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">TICKET CODE</span>
                    <span className="text-brand-orange font-extrabold block mt-0.5">{bookingResult.ticketCode}</span>
                  </div>

                  <div className="col-span-2 pt-2 border-t border-white/5">
                    <span className="text-slate-500 block text-[9px] uppercase">TARGET EXPEDITION</span>
                    <span className="text-white font-bold block mt-0.5 truncate">{bookingResult.tourTitle}</span>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-slate-500 block text-[9px] uppercase">DEPARTURE DATE</span>
                    <span className="text-white font-bold block mt-0.5">{bookingResult.departureDate}</span>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-slate-500 block text-[9px] uppercase">LODGING TIER</span>
                    <span className="text-brand-amber font-bold block mt-0.5">{bookingResult.accommodationTier}</span>
                  </div>

                  {bookingResult.customExtras.length > 0 && (
                    <div className="col-span-4 pt-2 border-t border-white/5">
                      <span className="text-slate-500 block text-[9px] uppercase">Bespeak multipliers loaded</span>
                      <span className="text-white font-semibold mt-0.5 block truncate text-[10px]">
                        {bookingResult.customExtras.join(' • ')}
                      </span>
                    </div>
                  )}

                </div>

                {/* Barcode/Instruction split */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-slate-950 p-4 rounded-xl border border-white/5">
                  
                  {/* Fake Styled Vector Barcode */}
                  <div className="flex flex-col items-center">
                    <div className="flex space-x-0.5 h-10 w-44 items-end bg-white p-1 rounded">
                      {[1,3,1,1,2,3,1,2,1,1,3,1,1,1,2,1,3,1,1,2,1,2,1,3].map((val, i) => (
                        <div key={i} className="bg-slate-950 flex-grow" style={{ height: `${val * 30}%` }}></div>
                      ))}
                    </div>
                    <span className="font-mono text-[9px] text-slate-500 mt-1">*{bookingResult.ticketCode}*</span>
                  </div>

                  <div className="flex-grow space-y-1 sm:pl-4 text-center sm:text-left text-xs text-slate-300">
                    <span className="font-bold text-white block">What's Next?</span>
                    <p className="text-slate-400 text-[11px] leading-normal">
                      We have sent your confirmation briefing to <span className="text-brand-orange">{bookingResult.customerEmail}</span>. Present this voucher at the F-7 Islamabad Basecamp 24 hours prior to departure for gear inspection.
                    </p>
                  </div>

                </div>

                {/* Footer close */}
                <div className="pt-5 mt-5 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setBookingResult(null)}
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white font-sans font-bold text-xs tracking-widest uppercase px-6 py-2.5 rounded-lg cursor-pointer"
                  >
                    HATCH TICKET FILE
                  </button>
                </div>

              </motion.div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
