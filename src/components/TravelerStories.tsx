/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRAVELER_STORIES } from '../data';
import { Star, Quote, Heart, ArrowRight, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function TravelerStories() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-white/5">
      
      {/* Visual coordinates */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#1a365d]/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 px-3 py-1 rounded-full mb-4">
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-brand-orange uppercase flex items-center gap-1.5">
              <Quote className="w-3.5 h-3.5" /> RECON FIELD STORIES
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-5xl tracking-tight text-white mb-4">
            Adventure <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-amber-200">Log Archives</span>
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Read high-altitude testimonies from solo backpackers, astro-photographers, and corporate pioneers who conquered the high ridges with us.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAVELER_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl glass-panel glass-panel-hover transition-all duration-300"
            >
              
              {/* Quote marks & stars */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1 text-brand-amber">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-amber text-brand-amber" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-white/5" />
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal italic">
                  "{story.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center space-x-4">
                <img
                  src={story.avatar}
                  alt={story.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-sans font-bold text-sm text-white">{story.author}</h4>
                  <span className="block font-mono text-[10px] text-brand-orange uppercase">{story.role}</span>
                  <span className="block font-mono text-[9px] text-slate-500 mt-0.5">{story.location}  •  {story.tripName}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Brand visual quote block */}
        <div className="mt-16 bg-gradient-to-r from-brand-orange/10 via-brand-amber/5 to-transparent border border-white/5 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto flex flex-col items-center">
          <Compass className="w-12 h-12 text-brand-orange mb-6 animate-spin-slow" />
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
            "THE MOUNTAINS ARE CALLING, AND I MUST GO"
          </h3>
          <p className="font-mono text-xs text-slate-400 tracking-wider uppercase mb-2">
            John Muir  •  Adopted by Team Karakoram Expeditions
          </p>
          <span className="h-1 w-16 bg-brand-orange rounded mt-4"></span>
        </div>

      </div>
    </section>
  );
}
