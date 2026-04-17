import { motion } from 'motion/react';

export default function Events() {
  return (
    <section id="events" className="min-h-screen py-24 flex items-center bg-luxury-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/80 to-transparent z-10" />
        <img 
          src="https://picsum.photos/seed/concert/1920/1080?grayscale" 
          alt="Concert Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-500 uppercase tracking-[0.3em] text-xs font-bold block mb-4">Stage Your Legend</span>
            <h2 className="text-6xl md:text-9xl mb-8 leading-[0.85] tracking-tight">
              The <br /><span className="italic font-serif text-purple-500">Arena.</span>
            </h2>
            <p className="text-white/60 mb-12 text-xl leading-relaxed font-light">
              A state-of-the-art concert and event venue designed to host the world's most iconic performers and grand-scale corporate activations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <div className="text-4xl font-serif text-white mb-2">5,000+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Capacity</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-white mb-2">4K</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Visual Tech</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-white mb-2">VIP</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Lounges</div>
              </div>
            </div>
            
            <button className="flex items-center gap-4 group">
              <span className="px-12 py-5 border border-white/20 rounded-full font-bold uppercase tracking-[0.2em] text-xs group-hover:bg-white group-hover:text-luxury-black transition-all duration-300">
                Book Venue
              </span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 transition-all duration-300">
                <motion.div whileHover={{ x: 5 }}>→</motion.div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
