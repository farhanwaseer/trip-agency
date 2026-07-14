/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Tour } from '../types';
import { TOURS } from '../data';
import { X, Heart, Compass, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  toggleFavorite: (tourId: string) => void;
  onPlanFavorite: (tourId: string) => void;
}

export default function FavoritesDrawer({
  isOpen,
  onClose,
  favorites,
  toggleFavorite,
  onPlanFavorite
}: FavoritesDrawerProps) {
  if (!isOpen) return null;

  const favoritedTours = TOURS.filter((tour) => favorites.includes(tour.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-sans">
      
      {/* Dark blur overlay */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose}></div>

      {/* Drawer Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 22, stiffness: 120 }}
        className="relative bg-[#090d16] border-l border-white/10 w-full max-w-md h-full shadow-2xl z-10 flex flex-col"
      >
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded bg-red-500/10 border border-red-500/30 text-red-500">
              <Heart className="w-5 h-5 fill-red-500 text-red-500" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">WISHLIST EXPEDITIONS</h3>
              <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                {favoritedTours.length} MISSIONS PINNED
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white cursor-pointer transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist list */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {favoritedTours.length > 0 ? (
            favoritedTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-slate-950/60 border border-white/5 rounded-xl p-4 flex gap-4 items-center justify-between shadow-lg relative overflow-hidden"
              >
                {/* Micro Thumbnail */}
                <img
                  src={tour.coverImage}
                  alt={tour.title}
                  className="w-16 h-16 object-cover rounded-lg shrink-0 border border-white/5"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-grow min-w-0">
                  <h4 className="font-display font-bold text-sm text-white truncate">{tour.title}</h4>
                  <div className="flex items-center space-x-3 text-slate-400 text-[10px] font-mono mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-orange" /> {tour.durationDays} Days
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange" /> PKR {tour.costPKR.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 shrink-0">
                  <button
                    onClick={() => {
                      onPlanFavorite(tour.id);
                      onClose();
                    }}
                    className="p-1.5 bg-brand-orange text-white hover:bg-brand-orange/90 rounded-lg cursor-pointer"
                    title="Plan Expedition"
                  >
                    <Compass className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleFavorite(tour.id)}
                    className="p-1.5 hover:bg-white/5 border border-white/10 text-red-500 rounded-lg cursor-pointer transition-all"
                    title="Remove from favorites"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Heart className="w-10 h-10 text-slate-800 mx-auto mb-3 animate-pulse" />
              <span className="font-display font-bold text-sm text-slate-400 block mb-1">Your wishlist is empty</span>
              <p className="font-sans text-[11px] text-slate-500 leading-normal max-w-xs mx-auto">
                Favorite any tactical packages while browsing our directories to pin them here for rapid planning.
              </p>
            </div>
          )}
        </div>

      </motion.div>

    </div>
  );
}
