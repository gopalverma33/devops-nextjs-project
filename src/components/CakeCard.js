"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CakeCard({ cake }) {
  // Creating a 3D tilt interaction object
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        y: -10,
        rotateX: 2,
        rotateY: -2,
      }}
      className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 overflow-hidden group cursor-pointer flex flex-col transform perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative h-72 overflow-hidden bg-brand-light/50">
        <motion.div
           className="w-full h-full relative"
           whileHover={{ scale: 1.08 }}
           transition={{ duration: 0.6 }}
        >
          <Image
            src={cake.image}
            alt={cake.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        
        {/* Premium Glass Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 pointer-events-none">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-white/20 backdrop-blur-md border border-white/50 text-white font-semibold py-2 px-8 rounded-full hover:bg-brand-accent transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] pointer-events-auto"
           >
             Order Now
           </motion.button>
        </div>
      </div>
      <div className="p-6 text-center flex-grow flex flex-col items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block glow-text">{cake.category}</span>
          <h3 className="font-playfair text-2xl font-bold mb-3 text-brand-brown line-clamp-2">{cake.name}</h3>
        </div>
        <p className="text-brand-brown text-xl font-medium">{cake.price}</p>
      </div>
    </motion.div>
  );
}
