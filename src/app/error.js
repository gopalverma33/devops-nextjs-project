"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application Error Boundry Caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-8 text-center">
      <div className="bg-white p-12 rounded-[2rem] shadow-2xl border border-red-100 max-w-lg">
        <h2 className="font-playfair text-3xl font-bold text-red-800 mb-4">
          Something went wrong
        </h2>
        <p className="text-brand-brown/70 mb-8 font-medium">
          We encountered a problem fetching data from the kitchen. Please try again or clear your cache.
        </p>
        <button
          onClick={() => reset()}
          className="bg-brand-brown text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-chocolate transition-colors shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
