import { motion } from 'motion/react';

const brands = [
  'Hermès', 'Saks Fifth Avenue', 'Gucci', 'Saint Laurent', 'Cartier', 'Dior', 'Louis Vuitton'
];

export default function Retail() {
  return (
    <section id="retail" className="min-h-screen py-24 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://picsum.photos/seed/luxury1/800/1000" 
                  alt="Luxury Retail" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mt-12"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://picsum.photos/seed/luxury2/800/1000" 
                  alt="High Fashion" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">Curated Excellence</span>
            <h2 className="text-6xl md:text-8xl mb-8 leading-none">The <br /><span className="italic font-serif">Avenue.</span></h2>
            <p className="text-white/60 mb-12 text-lg leading-relaxed max-w-lg">
              A curated collection of the world's most prestigious fashion houses, offering an unparalleled shopping experience defined by exclusivity and luxury.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {brands.map((brand, i) => (
                <span key={i} className="px-5 py-2 glass rounded-full text-xs uppercase tracking-widest text-white/80 border border-white/5 hover:border-luxury-gold/50 transition-colors cursor-default">
                  {brand}
                </span>
              ))}
            </div>
            
            <button className="px-12 py-5 bg-white text-luxury-black font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:bg-luxury-gold transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Leasing Portfolio
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 -skew-x-12 translate-x-1/2" />
    </section>
  );
}
