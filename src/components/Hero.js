"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 400]);

  // Motion variants for staggering child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background with Parallax Y shifting */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yParallax }}>
        <Image
          src="/images/hero_bg.png"
          alt="Bakery Treats"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Gradient Overlay for Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/10 backdrop-blur-[2px]"></div>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center px-6 mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-playfair text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl"
        >
          Chocolate Boutique
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-3xl text-brand-cream/90 mb-12 tracking-widest uppercase font-semibold drop-shadow-lg"
        >
          Delicious Cakes & Premium Cafe Treats
        </motion.p>
        
        <motion.a
          href="#gallery"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.4)" 
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-accent/90 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-brand-brown transition-colors duration-300"
        >
          Experience 3D Gallery
        </motion.a>
      </motion.div>
    </section>
  );
}
