import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 flex items-center justify-center bg-luxury-dark">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl mb-12 font-serif italic">The Future Awaits.</h2>
          <p className="text-white/60 mb-16 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you are looking to secure a flagship location or stage your next global event, American Dream provides the ultimate platform for your brand.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-16 py-6 bg-luxury-gold text-luxury-black font-bold uppercase tracking-[0.3em] text-[10px] rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(197,160,89,0.2)]">
              Leasing Inquiry
            </button>
            <button className="px-16 py-6 border border-white/20 text-white font-bold uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-white/5 transition-all">
              Event Booking
            </button>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Location</div>
              <div className="text-sm font-light">1 American Dream Way<br />East Rutherford, NJ 07073</div>
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Phone</div>
              <div className="text-sm font-light">+1 (833) 263-7326</div>
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Email</div>
              <div className="text-sm font-light italic">leasing@americandream.com</div>
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Follow</div>
              <div className="text-sm font-light">@americandream</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
