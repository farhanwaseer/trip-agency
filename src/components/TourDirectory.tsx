/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TOURS, DESTINATIONS } from '../data';
import { Tour, ItineraryDay } from '../types';
import {
  Calendar,
  Users,
  Compass,
  Star,
  Activity,
  Flame,
  Heart,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Briefcase,
  AlertTriangle,
  Award,
  DollarSign,
  Map,
  X,
  Compass as PlanIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TourDirectoryProps {
  filterDestinationId: string;
  setFilterDestinationId: (id: string) => void;
  filterCategory: string;
  setFilterCategory: (cat: string) => void;
  favorites: string[];
  toggleFavorite: (tourId: string) => void;
  onBookTour: (tourId: string) => void;
}

export default function TourDirectory({
  filterDestinationId,
  setFilterDestinationId,
  filterCategory,
  setFilterCategory,
  favorites,
  toggleFavorite,
  onBookTour
}: TourDirectoryProps) {
  const [selectedTourForItinerary, setSelectedTourForItinerary] = useState<Tour | null>(null);
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);

  const categories: string[] = [
    'All Styles',
    'Student Trips',
    'Adventure Tours',
    'Camping Tours',
    'Hiking Expeditions',
    'Photography Tours',
    'Family & Corporate'
  ];

  // Filter tours based on category tabs & selected destination
  const filteredTours = TOURS.filter((tour) => {
    const matchesCategory =
      filterCategory === 'All Styles' ||
      filterCategory === '' ||
      tour.category.toLowerCase() === filterCategory.toLowerCase();

    const matchesDestination =
      filterDestinationId === '' || tour.destinationId === filterDestinationId;

    return matchesCategory && matchesDestination;
  });

  const getDestinationName = (destId: string) => {
    const dest = DESTINATIONS.find((d) => d.id === destId);
    return dest ? dest.name : 'Northern Areas';
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'easy':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'moderate':
        return 'bg-brand-amber/10 text-brand-amber border-brand-amber/30';
      case 'challenging':
        return 'bg-brand-orange/10 text-brand-orange border-brand-orange/30';
      case 'technical':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <section id="tours" className="py-24 bg-transparent relative">
      
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 px-3 py-1 rounded-full mb-3">
              <span className="font-mono text-[10px] tracking-widest text-brand-orange font-bold uppercase flex items-center gap-1">
                <Flame className="w-3 h-3 text-brand-orange animate-pulse" /> TARGET MISSIONS
              </span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-white">
              Tactical <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-amber-200">Expeditions</span>
            </h2>
          </div>

          {/* Quick Active Filters Clear */}
          {(filterDestinationId || (filterCategory !== 'All Styles' && filterCategory !== '')) && (
            <button
              onClick={() => {
                setFilterDestinationId('');
                setFilterCategory('All Styles');
              }}
              className="mt-4 md:mt-0 font-mono text-xs text-brand-orange hover:text-white flex items-center gap-1 px-3 py-1.5 bg-brand-orange/10 border border-brand-orange/20 rounded-lg cursor-pointer transition-all"
            >
              <X className="w-3.5 h-3.5" /> Clear active filters
            </button>
          )}
        </div>

        {/* Dynamic Category Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all border cursor-pointer ${
                (filterCategory === cat || (cat === 'All Styles' && filterCategory === ''))
                  ? 'bg-gradient-to-r from-brand-orange to-brand-amber text-white border-transparent shadow-lg shadow-brand-orange/25'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Current Filter Indicator Status */}
        {filterDestinationId && (
          <div className="mb-6 inline-flex items-center space-x-2 bg-slate-950 px-3.5 py-1.5 rounded-lg border border-white/5 font-mono text-xs text-slate-400">
            <span>Filtering by location:</span>
            <span className="text-white font-bold">{getDestinationName(filterDestinationId)}</span>
            <button
              onClick={() => setFilterDestinationId('')}
              className="text-red-400 hover:text-white ml-2 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Tours Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => {
              const isFavorite = favorites.includes(tour.id);
              
              return (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-slate-950/80 border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl glass-panel glass-panel-hover"
                >
                  
                  {/* Card Thumbnail */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={tour.coverImage}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>

                    {/* Left Badges */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      <span className="bg-slate-950/85 backdrop-blur-sm border border-white/10 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                        {tour.category}
                      </span>
                      {tour.isPopular && (
                        <span className="bg-brand-orange text-white font-mono text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wide flex items-center gap-1">
                          <Flame className="w-3 h-3" /> BEST SELLER
                        </span>
                      )}
                    </div>

                    {/* Right Heart Favorites toggle */}
                    <button
                      onClick={() => toggleFavorite(tour.id)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 hover:bg-slate-950/100 border border-white/10 hover:border-brand-orange/40 text-slate-300 hover:text-red-500 transition-all cursor-pointer"
                    >
                      <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500 border-transparent' : ''}`} />
                    </button>

                    {/* Bottom Info Bar on Image */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-slate-300 font-mono">
                      <span className="flex items-center gap-1 bg-slate-950/70 px-2 py-0.5 rounded border border-white/5">
                        <MapPin className="w-3.5 h-3.5 text-brand-orange" /> {getDestinationName(tour.destinationId)}
                      </span>
                      
                      {/* Rating stars */}
                      <span className="flex items-center gap-1 bg-slate-950/70 px-2 py-0.5 rounded border border-white/5 text-brand-amber font-bold">
                        <Star className="w-3.5 h-3.5 fill-brand-amber text-brand-amber" /> {tour.rating}
                      </span>
                    </div>

                  </div>

                  {/* Details Block */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3 line-clamp-1 group-hover:text-brand-orange transition-all">
                        {tour.title}
                      </h3>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1.5 mb-5 text-xs text-slate-400">
                        {tour.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-brand-orange font-mono font-bold mt-0.5">▪</span>
                            <span className="line-clamp-1">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats table */}
                    <div className="grid grid-cols-3 gap-2 bg-slate-900/60 border border-white/5 p-3 rounded-lg mb-6 text-center font-mono text-[10px] text-slate-400">
                      <div>
                        <span className="block text-slate-500 text-[8px] uppercase">DURATION</span>
                        <span className="font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3 text-brand-orange" /> {tour.durationDays} Days
                        </span>
                      </div>
                      <div>
                        <span className="block text-slate-500 text-[8px] uppercase">LIMIT</span>
                        <span className="font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                          <Users className="w-3 h-3 text-brand-orange" /> {tour.groupSize.split(' ')[0]} Max
                        </span>
                      </div>
                      <div>
                        <span className="block text-slate-500 text-[8px] uppercase">TERRAIN</span>
                        <span className={`font-semibold px-1 py-0.5 rounded border ${getDifficultyColor(tour.difficulty)} block mt-0.5 text-[8px]`}>
                          {tour.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Slots left Warning if less than 6 */}
                    {tour.slotsLeft <= 5 && (
                      <div className="mb-4 bg-brand-orange/10 border border-brand-orange/20 px-3 py-1.5 rounded-md flex items-center space-x-1.5 text-[10px] font-mono text-brand-orange">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        <span>TACTICAL SHORTAGE: {tour.slotsLeft} SEATS REMAINING</span>
                      </div>
                    )}

                    {/* Price and Action Footer */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[9px] text-slate-500 block">BASE PER HEAD</span>
                        <span className="font-display font-extrabold text-white text-lg">
                          {/* PKR {tour.costPKR.toLocaleString()} */}
                          PKR -- SOON
                        </span>
                        <span className="font-mono text-[9px] text-slate-400 block mt-0.5">
                          Approx. USD ${tour.costUSD}
                        </span>
                      </div>

                      <div className="flex flex-col space-y-2">
                        {/* View Itinerary Button */}
                        <button
                          onClick={() => {
                            setSelectedTourForItinerary(tour);
                            setActiveDayIndex(0);
                          }}
                          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/1 w-full rounded-lg font-mono text-[10px] text-slate-300 hover:text-white transition-all cursor-pointer flex items-center justify-center space-x-1"
                        >
                          <Map className="w-3.5 h-3.5 text-brand-orange" />
                          <span>View Log Book</span>
                        </button>
                        
                        {/* Book direct */}
                        <button
                          onClick={() => onBookTour(tour.id)}
                          className="px-3 py-1.5 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg font-sans font-bold text-[10px] tracking-widest uppercase transition-all cursor-pointer flex items-center justify-center space-x-1"
                        >
                          <PlanIcon className="w-3.5 h-3.5" />
                          <span>Reserve Space</span>
                        </button>
                      </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center bg-slate-900/60 border border-white/5 p-12 rounded-2xl max-w-lg mx-auto">
            <Compass className="w-12 h-12 text-slate-500 mx-auto mb-4 animate-bounce" />
            <span className="font-display font-bold text-lg text-white block mb-2">No matching missions located</span>
            <p className="font-sans text-xs text-slate-400 leading-relaxed mb-6">
              Our scouting archives don't contain any active trips matching this location/style combo at this time. Try clearing your filters or select a different category.
            </p>
            <button
              onClick={() => {
                setFilterDestinationId('');
                setFilterCategory('All Styles');
              }}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-sans text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-lg cursor-pointer"
            >
              Reset Target Files
            </button>
          </div>
        )}

        {/* Expandable Itinerary Log-Book (Drawer Slider View) */}
        <AnimatePresence>
          {selectedTourForItinerary && (
            <div className="fixed inset-0 z-50 flex justify-end">
              
              {/* Blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                onClick={() => setSelectedTourForItinerary(null)}
              ></motion.div>

              {/* Drawer panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 22, stiffness: 120 }}
                className="relative bg-[#090d16] border-l border-white/10 w-full max-w-xl h-full shadow-2xl z-10 flex flex-col"
              >
                {/* Drawer Header */}
                <div className="p-6 border-b border-white/5 bg-slate-950 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">EXPEDITION LOG BOOK</h3>
                      <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest">{selectedTourForItinerary.durationDays} Days Day-By-Day Strategy</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTourForItinerary(null)}
                    className="p-1.5 hover:bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white cursor-pointer transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Cover Preview banner */}
                <div className="h-36 relative overflow-hidden shrink-0">
                  <img
                    src={selectedTourForItinerary.coverImage}
                    alt={selectedTourForItinerary.title}
                    className="w-full h-full object-cover brightness-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="font-mono text-[9px] text-brand-orange font-bold uppercase">{selectedTourForItinerary.category}</span>
                    <h4 className="font-display font-bold text-base sm:text-lg text-white">{selectedTourForItinerary.title}</h4>
                  </div>
                </div>

                {/* Day selector navigation timeline */}
                <div className="flex border-b border-white/5 bg-slate-950 overflow-x-auto no-scrollbar py-2 px-6 shrink-0">
                  {selectedTourForItinerary.itinerary.map((day, idx) => (
                    <button
                      key={day.dayNumber}
                      onClick={() => setActiveDayIndex(idx)}
                      className={`px-4 py-2 shrink-0 font-mono text-xs font-bold rounded-lg border mr-2 transition-all cursor-pointer ${
                        activeDayIndex === idx
                          ? 'bg-brand-orange/10 border-brand-orange text-brand-orange'
                          : 'bg-slate-900 border-white/5 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      DAY {day.dayNumber}
                    </button>
                  ))}
                </div>

                {/* Timeline description container (Scrollable) */}
                <div className="flex-grow overflow-y-auto p-6 space-y-6">
                  
                  {/* Selected Day Contents */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDayIndex}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center space-x-2 text-brand-orange">
                        <span className="font-mono text-xs font-extrabold px-2.5 py-1 bg-brand-orange/10 border border-brand-orange/30 rounded">
                          TACTICAL DAY {selectedTourForItinerary.itinerary[activeDayIndex].dayNumber}
                        </span>
                        <span className="font-sans font-bold text-white text-base">
                          {selectedTourForItinerary.itinerary[activeDayIndex].title}
                        </span>
                      </div>

                      <div className="bg-slate-950/60 border border-white/5 rounded-xl p-4 space-y-3 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <p>{selectedTourForItinerary.itinerary[activeDayIndex].description}</p>
                      </div>

                      {/* Tactical telemetry */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-950/60 border border-white/5 p-4 rounded-xl">
                          <span className="font-mono text-[10px] text-slate-500 block uppercase">PRIMARY OBJECTIVE</span>
                          <span className="font-sans font-bold text-white text-xs mt-1 block">
                            {selectedTourForItinerary.itinerary[activeDayIndex].activity}
                          </span>
                        </div>
                        <div className="bg-slate-950/60 border border-white/5 p-4 rounded-xl">
                          <span className="font-mono text-[10px] text-slate-500 block uppercase">SLEEPING BASE COORDINATES</span>
                          <span className="font-sans font-bold text-white text-xs mt-1 block">
                            {selectedTourForItinerary.itinerary[activeDayIndex].sleepPoint}
                          </span>
                        </div>
                        {selectedTourForItinerary.itinerary[activeDayIndex].elevationChange && (
                          <div className="col-span-2 bg-slate-950/60 border border-white/5 p-4 rounded-xl">
                            <span className="font-mono text-[10px] text-slate-500 block uppercase">ELEVATION TRAJECTORY</span>
                            <span className="font-mono font-bold text-brand-amber text-xs mt-1 block flex items-center gap-1">
                              <Activity className="w-3.5 h-3.5 text-brand-amber animate-pulse" />
                              {selectedTourForItinerary.itinerary[activeDayIndex].elevationChange}
                            </span>
                          </div>
                        )}
                      </div>

                    </motion.div>
                  </AnimatePresence>

                  {/* Trust Stamps / Why Choose Karakoram Exped */}
                  <div className="pt-6 border-t border-white/5 space-y-3">
                    <span className="font-mono text-[10px] text-slate-500 block uppercase tracking-widest">TACTICAL INCLUSIONS</span>
                    <div className="grid grid-cols-2 gap-3 text-[11px] font-sans text-slate-400">
                      <div className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 bg-brand-orange rounded-full"></span>
                        <span>Private 4x4 Luxury Jeeps & Coasters</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 bg-brand-orange rounded-full"></span>
                        <span>Certified Wilderness Guides & First Aid</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 bg-brand-orange rounded-full"></span>
                        <span>3 Standard Meals Daily + Fresh BBQ</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 bg-brand-orange rounded-full"></span>
                        <span>Premium Camping Equipment & Logs</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer Action */}
                <div className="p-6 border-t border-white/5 bg-slate-950 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs font-mono mb-1">
                    <span className="text-slate-500">EXPEDITION INVESTMENT</span>
                    <span className="text-white font-extrabold text-base">PKR {selectedTourForItinerary.costPKR.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => {
                      onBookTour(selectedTourForItinerary.id);
                      setSelectedTourForItinerary(null);
                    }}
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl py-3 font-sans font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 cursor-pointer transition-all"
                  >
                    <PlanIcon className="w-4 h-4" />
                    <span>Deploy Booking Sequence</span>
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
