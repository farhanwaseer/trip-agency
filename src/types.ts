/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
  activity: string;
  sleepPoint: string;
  elevationChange?: string;
}

export interface Tour {
  id: string;
  title: string;
  category: 'Student Trips' | 'Adventure Tours' | 'Camping Tours' | 'Hiking Expeditions' | 'Photography Tours' | 'Family & Corporate';
  destinationId: string;
  durationDays: number;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Technical';
  costPKR: number;
  costUSD: number;
  departureFrom: string;
  isPopular: boolean;
  coverImage: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  slotsLeft: number;
  rating: number;
  reviewCount: number;
}

export interface Destination {
  id: string;
  name: string;
  tag: string;
  description: string;
  elevation: string;
  bestSeason: string;
  coordinates: string;
  coverImage: string;
  highlights: string[];
  adventureTier: string;
}

export interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  tourId: string;
  tourTitle: string;
  departureDate: string;
  numTravelers: number;
  totalCostPKR: number;
  accommodationTier: 'Backpacker Camp' | 'Cozy Lodge' | 'Glamping dome';
  customExtras: string[];
  notes?: string;
  bookingDate: string;
  status: 'Confirmed' | 'Pending';
  ticketCode: string;
}

export interface TravelerStory {
  id: string;
  author: string;
  age: number;
  role: string;
  content: string;
  location: string;
  avatar: string;
  tripName: string;
  rating: number;
}

export interface ExpeditionAlert {
  id: string;
  location: string;
  altitude: string;
  message: string;
  timestamp: string;
  teamName: string;
}
