import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-buildings-cityscape-at-night-4240-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/50" />
      </div>

      <div className="relative z-10 text-left px-12 md:px-[50px] w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1 mb-6 border border-luxury-gold rounded-full text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-bold">
            MASTER PLAN v2.4
          </span>
          <h1 className="text-[72px] md:text-[104px] font-normal mb-8 leading-[0.85] tracking-[-4px]">
            AMERICAN<br />
            DREAM
          </h1>
          <p className="text-lg md:text-xl text-luxury-dim max-w-[480px] font-normal leading-relaxed">
            A transformative integration of luxury retail, immersive hydration zones, and acoustic brilliance. The pinnacle of architectural ambition designed for the next generation of American leisure.
          </p>
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="w-24 h-[1px] bg-luxury-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
