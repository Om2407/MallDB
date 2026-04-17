import { motion } from 'motion/react';
import ThreeScene from '../ThreeScene';

const stats = [
  { label: 'Annual Visitors', value: '40M+' },
  { label: 'Square Footage', value: '3M' },
  { label: 'Luxury Brands', value: '450+' },
  { label: 'Global Reach', value: '150M' },
];

export default function Overview() {
  return (
    <section id="overview" className="min-h-screen py-24 flex items-center bg-luxury-dark/30">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">The Scale of Ambition</span>
          <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
            More Than a Mall. <br />
            <span className="italic">A Global Icon.</span>
          </h2>
          <p className="text-white/60 mb-12 text-lg leading-relaxed max-w-xl">
            Located just miles from New York City, American Dream represents the next evolution of consumer experience — combining world-class retail with record-breaking attractions.
          </p>
          
          <div className="grid grid-cols-2 gap-12 mt-12 pt-8 border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="text-4xl md:text-5xl font-serif text-luxury-gold block mb-1">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-luxury-dim">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="h-[600px] relative rounded-3xl overflow-hidden glass shadow-2xl">
          <ThreeScene />
          <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl">
            <h3 className="text-sm uppercase tracking-widest font-bold mb-2">Interactive Blueprint</h3>
            <p className="text-xs text-white/50">Explore the interconnected ecosystem of the East Coast's premier destination.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
