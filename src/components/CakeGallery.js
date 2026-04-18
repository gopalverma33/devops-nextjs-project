"use client";

import { useState, useMemo } from "react";
import CakeCard from "./CakeCard";

/**
 * Pure presentation component for rendering a horizontal list of interactive filter pills.
 *
 * @param {Object} props
 * @param {Array<string>} props.filters - Available filter categories.
 * @param {string} props.activeFilter - The currently selected filter category.
 * @param {Function} props.onSelect - Callback fired when a pill is clicked.
 */
function FilterTabs({ filters, activeFilter, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
            activeFilter === filter
              ? "bg-brand-brown text-brand-cream shadow-lg scale-105"
              : "bg-white text-brand-brown border border-brand-brown/10 hover:border-brand-brown/30 hover:bg-brand-light"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

/**
 * Main Gallery section controlling business logic to sort and showcase cakes.
 */
export default function CakeGallery({ initialCakes }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Wedding", "Birthday", "Theme"];

  const filteredCakes = useMemo(() => {
    if (activeFilter === "All") return initialCakes;
    return initialCakes.filter((cake) => cake.category === activeFilter);
  }, [activeFilter, initialCakes]);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-brown mb-6">
            Signature Cake Collections
          </h2>
          <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg mb-10">
            Explore our curated selection of premium handcrafted cakes designed for unforgettable moments.
          </p>

          <FilterTabs 
            filters={filters} 
            activeFilter={activeFilter} 
            onSelect={setActiveFilter} 
          />
        </div>

        {/* Gallery Grid */}
        {filteredCakes.length === 0 ? (
           <div className="text-center py-20">
             <p className="text-xl text-brand-brown/60">No cakes found in this category.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
