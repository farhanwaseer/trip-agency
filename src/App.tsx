/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DestinationExplorer from './components/DestinationExplorer';
import TourDirectory from './components/TourDirectory';
import InteractiveCustomizer from './components/InteractiveCustomizer';
import IslamabadBasecamp from './components/IslamabadBasecamp';
import TravelerStories from './components/TravelerStories';
import Footer from './components/Footer';
import MyBookings from './components/MyBookings';
import FavoritesDrawer from './components/FavoritesDrawer';
import TripGallery from './components/TripGallery';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { Booking } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('karakoram_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('karakoram_theme', theme);
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [filterDestinationId, setFilterDestinationId] = useState('');
  const [filterCategory, setFilterCategory] = useState('All Styles');
  
  // Favorites wish state initialized from local storage
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('karakoram_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Booked tickets state initialized from local storage
  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('karakoram_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  // Drawers overlay toggles
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  
  // Customizer state linkage
  const [preSelectedTourId, setPreSelectedTourId] = useState('');

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('karakoram_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Persist bookings
  useEffect(() => {
    localStorage.setItem('karakoram_bookings', JSON.stringify(bookings));
  }, [bookings]);

  // Handle active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'destinations', 'tours', 'customizer', 'basecamp-hub', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick search widget callback from hero
  const handleSearch = (destinationId: string, category: string) => {
    setFilterDestinationId(destinationId);
    if (category) {
      setFilterCategory(category);
    } else {
      setFilterCategory('All Styles');
    }
    
    // Scroll to tours
    const el = document.getElementById('tours');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Select destination directly from explorer bento grid
  const handleSelectDestinationForTours = (destinationId: string) => {
    setFilterDestinationId(destinationId);
    setFilterCategory('All Styles'); // Reset style category to show all matching
  };

  // Toggle favorite checklist
  const toggleFavorite = (tourId: string) => {
    if (favorites.includes(tourId)) {
      setFavorites(favorites.filter((id) => id !== tourId));
    } else {
      setFavorites([...favorites, tourId]);
    }
  };

  // Set selected tour in configurator and scroll smoothly
  const handleBookTour = (tourId: string) => {
    setPreSelectedTourId(tourId);
    const customizerEl = document.getElementById('customizer');
    if (customizerEl) {
      customizerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Booking generator submission callback
  const handleBookingSuccess = (newBooking: Booking) => {
    setBookings([newBooking, ...bookings]);
    setIsBookingsOpen(true); // Pop open bookings tickets view to showcase voucher!
  };

  // Cancel booking
  const handleCancelBooking = (bookingId: string) => {
    setBookings(bookings.filter((b) => b.id !== bookingId));
  };

  // Open favorites planner integration
  const handlePlanFavorite = (tourId: string) => {
    handleBookTour(tourId);
  };

  return (
    <div className="min-h-screen bg-transparent text-inherit flex flex-col font-sans selection:bg-brand-orange selection:text-white relative overflow-x-hidden">
      
      {/* Immersive Atmospheric Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#1a365d] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#7c2d12] rounded-full blur-[120px] opacity-15"></div>
        
        {/* CSS Mountain Peak Silhouette Overlay */}
        <div className="absolute bottom-0 w-full h-[320px] opacity-[0.25] flex items-end">
          <div style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} className="w-[450px] h-full bg-gradient-to-b from-[#111] to-black -ml-20"></div>
          <div style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} className="w-[650px] h-[80%] bg-gradient-to-b from-[#0a0a0a] to-black -ml-40"></div>
          <div style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} className="w-[550px] h-[90%] bg-gradient-to-b from-[#0d0d0d] to-black -ml-40"></div>
        </div>
      </div>

      {/* Immersive Fixed Navigation Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        bookingCount={bookings.length}
        onOpenBookings={() => setIsBookingsOpen(true)}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Pages stack */}
      <main className="flex-grow">
        
        {/* Cinematic Hero Landing */}
        <HeroSection
          onSearch={handleSearch}
          onExploreTours={() => {
            const el = document.getElementById('tours');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Destination Explorer Bento Grid */}
        <DestinationExplorer
          onSelectDestinationForTours={handleSelectDestinationForTours}
        />

        {/* Tours & Mission Packages Directory */}
        <TourDirectory
          filterDestinationId={filterDestinationId}
          setFilterDestinationId={setFilterDestinationId}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          onBookTour={handleBookTour}
        />

        {/* Stateful Trip Configurator / Booking System */}
        <InteractiveCustomizer
          preSelectedTourId={preSelectedTourId}
          setPreSelectedTourId={setPreSelectedTourId}
          onBookingSuccess={handleBookingSuccess}
        />

        {/* Islamabad HQ Departure Basecamp */}
        <IslamabadBasecamp />

        {/* Social Traveler stories reviews */}
        <TravelerStories />

        {/* Gallery Section */}
        <TripGallery />

        {/* About Agency Story Section */}
        <AboutSection />

        {/* Contact Page Section */}
        <ContactSection />

      </main>

      {/* Adventure footer */}
      <Footer />

      {/* OVERLAY DRAWERS */}
      
      {/* Active bookings list voucher drawer */}
      <MyBookings
        isOpen={isBookingsOpen}
        onClose={() => setIsBookingsOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
      />

      {/* favorites wishlist pins drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        onPlanFavorite={handlePlanFavorite}
      />

    </div>
  );
}
