/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Camera, Maximize2, X, Compass, ArrowRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Hunza' | 'Fairy Meadows' | 'Deosai' | 'Skardu' | 'Swat';
  imageUrl: string;
  description: string;
  photographer: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Passu Cones Golden Hour',
    location: 'Gojal, Hunza Valley',
    category: 'Hunza',
    imageUrl: 'https://images.unsplash.com/photo-1621244249243-436b79b5eea8?auto=format&fit=crop&w=1200&q=80',
    description: 'The iconic, razor-sharp peaks of Passu Cones standing tall against a glowing evening sunset sky.',
    photographer: 'Zain Malik'
  },
  {
    id: 'g-2',
    title: 'Attabad Turquoise Mirror',
    location: 'Hunza Valley',
    category: 'Hunza',
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    description: 'The mesmerizing bright-turquoise waters of Attabad Lake reflecting the dry canyon peaks around it.',
    photographer: 'Aisha Shah'
  },
  {
    id: 'g-3',
    title: 'Nanga Parbat Amphitheater',
    location: 'Fairy Meadows',
    category: 'Fairy Meadows',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    description: 'The monumental, intimidating north face of the "Killer Mountain" seen directly from the soft alpine cabins.',
    photographer: 'Sheraz Ali'
  },
  {
    id: 'g-4',
    title: 'Camp Under Milky Way',
    location: 'Sheosar Lake, Deosai Plains',
    category: 'Deosai',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    description: 'A stellar night at 4,114m. Clear cosmic views of the Milky Way galaxy spanning across high-altitude tents.',
    photographer: 'Aisha Malik'
  },
  {
    id: 'g-5',
    title: 'Upper Kachura Mirror Lake',
    location: 'Skardu, Baltistan',
    category: 'Skardu',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
    description: 'Tucked deep in Skardu, the pristine, crystal-clear lake mirrors the massive surrounding Karakoram dunes.',
    photographer: 'Hamza Khan'
  },
  {
    id: 'g-6',
    title: 'Katpana Desert Caravan',
    location: 'Skardu, Baltistan',
    category: 'Skardu',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    description: 'High-altitude cold sand dunes under a harsh alpine sun, creating incredible landscape textures.',
    photographer: 'Farhan Sheikh'
  },
  {
    id: 'g-7',
    title: 'Alpine Cabin Woods',
    location: 'Kalam Valley, Swat',
    category: 'Swat',
    imageUrl: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1200&q=80',
    description: 'Lush, misty green pine forest trails and roaring glacial streams cutting through Swat Valley.',
    photographer: 'Imran Chaudhry'
  },
  {
    id: 'g-8',
    title: 'Sheosar Sunrise Glow',
    location: 'Deosai National Park',
    category: 'Deosai',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    description: 'Freezing wind and golden sunrise beams striking the high mountains surrounding the great Deosai plateau.',
    photographer: 'Sana Ahmed'
  }
];

export default function TripGallery() {
  const [filter, setFilter] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Hunza', 'Fairy Meadows', 'Deosai', 'Skardu', 'Swat'];

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Decorative wilderness grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 px-4 py-1.5 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-brand-orange uppercase flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" /> RECON PHOTOGRAPHY LOGS
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-5xl tracking-tight text-white mb-4">
            Wilderness <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-amber-200">Exhibition</span>
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Stunning visual evidence captured live on site by our certified high-altitude guides, local recon partners, and brave travelers.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all border cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-brand-orange to-brand-amber text-white border-transparent shadow-lg shadow-brand-orange/25'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                id={`gallery-item-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[320px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer shadow-xl hover:shadow-brand-orange/10"
                onClick={() => setActiveImage(item)}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="font-mono text-[9px] text-brand-orange font-bold tracking-widest uppercase mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-display font-medium text-lg text-white mb-2 group-hover:text-brand-amber transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-[10px] font-mono text-slate-400">
                      Photo: {item.photographer}
                    </span>
                    <span className="p-1.5 rounded-full bg-brand-orange text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            id="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/15 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left: Image */}
                <div className="md:col-span-8 h-[300px] sm:h-[450px] relative">
                  <img
                    src={activeImage.imageUrl}
                    alt={activeImage.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-[10px] font-mono text-slate-300">
                    {activeImage.category} • {activeImage.location}
                  </div>
                </div>

                {/* Right: Info */}
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-brand-orange font-bold tracking-widest uppercase">
                      EXHIBIT DETAILS
                    </span>
                    <h3 className="font-display font-light text-2xl sm:text-3xl text-white">
                      {activeImage.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeImage.description}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                    <div>
                      <span className="block text-[9px] font-mono text-slate-500 uppercase">PHOTOGRAPHER</span>
                      <span className="text-xs font-sans font-medium text-white">{activeImage.photographer}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 px-3 py-1.5 rounded-full text-brand-orange">
                      <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                      <span className="font-mono text-[9px] font-bold">RECON</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
