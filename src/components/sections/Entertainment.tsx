import { motion } from 'motion/react';

export default function Entertainment({ onStartSim }: { onStartSim: () => void }) {
  return (
    <section id="entertainment" className="min-h-screen py-24 flex items-center bg-zinc-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00A3E0] uppercase tracking-[0.3em] text-xs font-bold block mb-4">Record-Breaking Fun</span>
          <h2 className="text-6xl md:text-8xl mb-8 leading-none">Splash <br /><span className="italic font-serif text-[#00A3E0]">Bigger.</span></h2>
          <p className="text-white/60 mb-12 text-lg leading-relaxed max-w-lg">
            Home to the DreamWorks Water Park, North America's largest indoor water park, featuring record-breaking slides and a year-round tropical environment.
          </p>
          
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="p-6 glass rounded-2xl text-center">
              <div className="text-2xl font-bold mb-1">81°F</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Year-Round</div>
            </div>
            <div className="p-6 glass rounded-2xl text-center">
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Attractions</div>
            </div>
            <div className="p-6 glass rounded-2xl text-center">
              <div className="text-2xl font-bold mb-1">1.5M</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Gallons</div>
            </div>
          </div>

          <button 
            onClick={onStartSim}
            className="px-10 py-5 bg-[#00A3E0] text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,163,224,0.3)]"
          >
            Launch Virtual Experience
          </button>
        </motion.div>

        <div className="relative">
          <motion.div 
            className="aspect-square rounded-full overflow-hidden border-8 border-white/5 relative z-10"
            initial={{ rotate: -10, scale: 0.9 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://picsum.photos/seed/waterpark/1000/1000" 
              alt="Water Park" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Accent circles */}
          <div className="absolute -top-8 -right-8 w-32 h-32 glass rounded-full flex items-center justify-center animate-bounce">
            <span className="text-[10px] font-bold uppercase tracking-widest text-center">World's <br /> Largest</span>
          </div>
        </div>
      </div>
    </section>
  );
}
