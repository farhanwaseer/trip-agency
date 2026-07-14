/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Booking } from '../types';
import { X, Ticket, Calendar, Users, MapPin, Shield, Trash2, Award, Info, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

interface MyBookingsProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  onCancelBooking: (id: string) => void;
}

export default function MyBookings({ isOpen, onClose, bookings, onCancelBooking }: MyBookingsProps) {
  if (!isOpen) return null;

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
        className="relative bg-[#090d16] border-l border-white/10 w-full max-w-xl h-full shadow-2xl z-10 flex flex-col"
      >
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">MY ADVENTURE TICKET FILES</h3>
              <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                {bookings.length} ACTIVE DEPLOYMENTS LISTED
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

        {/* Booked tickets list (Scrollable) */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-slate-950 border border-brand-orange/30 rounded-2xl p-5 relative overflow-hidden space-y-4 shadow-xl"
              >
                {/* Visual side glow */}
                <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-brand-orange"></div>

                {/* Ticket Header */}
                <div className="flex justify-between items-start pl-2">
                  <div>
                    <span className="font-mono text-[9px] text-brand-orange font-bold uppercase tracking-wider block">
                      ITINERARY VOUCHER
                    </span>
                    <h4 className="font-display font-bold text-base text-white">{booking.tourTitle}</h4>
                  </div>
                  <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/35 px-2 py-0.5 rounded font-mono text-[9px] font-bold">
                    {booking.status}
                  </span>
                </div>

                {/* Grid details */}
                <div className="grid grid-cols-2 gap-3 pl-2 bg-slate-900/40 p-3 rounded-lg border border-white/5 font-mono text-[11px] text-slate-300">
                  <div>
                    <span className="text-slate-500 block text-[8px] uppercase">LEAD EXPLORER</span>
                    <span className="text-white font-semibold block truncate mt-0.5">{booking.customerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[8px] uppercase">BOARDING PASS NO.</span>
                    <span className="text-brand-orange font-bold block mt-0.5">{booking.ticketCode}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[8px] uppercase">DEPARTURE TARGET</span>
                    <span className="text-white font-bold block mt-0.5 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-brand-orange" /> {booking.departureDate}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[8px] uppercase">SQUAD COMPOSITION</span>
                    <span className="text-white font-bold block mt-0.5 flex items-center gap-1">
                      <Users className="w-3 h-3 text-brand-orange" /> {booking.numTravelers} Head
                    </span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-white/5">
                    <span className="text-slate-500 block text-[8px] uppercase">LODGING TIER</span>
                    <span className="text-brand-amber font-bold block mt-0.5">{booking.accommodationTier}</span>
                  </div>
                  {booking.customExtras.length > 0 && (
                    <div className="col-span-2 pt-2 border-t border-white/5">
                      <span className="text-slate-500 block text-[8px] uppercase">LOGISTICS ADDITIONS</span>
                      <span className="text-slate-300 block text-[9px] truncate mt-0.5">{booking.customExtras.join(' • ')}</span>
                    </div>
                  )}
                </div>

                {/* Simulated barcode */}
                <div className="flex items-center justify-between pl-2 pt-1 border-t border-dashed border-white/10">
                  <div className="flex space-x-0.5 h-6 w-32 bg-white/90 p-0.5 rounded">
                    {[1,2,1,1,3,1,2,1,1,3,1,1,1,2,1,2,3,1,1,2,1].map((v, idx) => (
                      <div key={idx} className="bg-slate-950 flex-grow" style={{ height: `${v * 30}%` }}></div>
                    ))}
                  </div>
                  
                  {/* Actions (Cancel/Revoke) */}
                  <button
                    onClick={() => {
                      if (confirm('Revoking this boarding pass dissolves your reservation. Proceed?')) {
                        onCancelBooking(booking.id);
                      }
                    }}
                    className="flex items-center space-x-1 px-2.5 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 text-red-400 rounded-lg font-mono text-[10px] transition-all cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Revoke Pass</span>
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="text-center bg-slate-950/60 border border-white/5 p-12 rounded-2xl">
              <Ticket className="w-12 h-12 text-slate-700 mx-auto mb-4 animate-pulse" />
              <span className="font-display font-bold text-base text-white block mb-1">No active itineraries found</span>
              <p className="font-sans text-xs text-slate-400 leading-relaxed mb-6">
                You have not booked or configured any custom expedition tickets yet. Choose an active package or use our planner to generate your first digital boarding pass.
              </p>
              <button
                onClick={onClose}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-sans text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-lg cursor-pointer transition-all"
              >
                Go to planning decks
              </button>
            </div>
          )}

        </div>

        {/* Footer info briefing */}
        {bookings.length > 0 && (
          <div className="p-6 border-t border-white/5 bg-slate-950 text-xs text-slate-400 space-y-3.5">
            <div className="flex items-start space-x-2">
              <Info className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <span>Bring printouts or secure smartphone files of your digital pass codes to the F-7 Base camp prior to boarding checklists.</span>
            </div>
          </div>
        )}

      </motion.div>

    </div>
  );
}
