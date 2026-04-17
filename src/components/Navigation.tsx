import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { 
  Building2, 
  MapPin, 
  ShoppingBag, 
  Waves, 
  Music, 
  Mail, 
  ExternalLink 
} from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Intro', icon: Building2 },
  { id: 'overview', label: 'Overview', icon: MapPin },
  { id: 'retail', label: 'Retail', icon: ShoppingBag },
  { id: 'entertainment', label: 'Water Park', icon: Waves },
  { id: 'events', label: 'Arena', icon: Music },
  { id: 'contact', label: 'Leasing', icon: Mail },
];

export default function Navigation({ activeSection, onNavigate }: { activeSection: string, onNavigate: (id: string) => void }) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8 p-6 bg-luxury-black/40 backdrop-blur-md border border-white/10 rounded-full hidden md:flex">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={cn(
            "group relative transition-all duration-300",
            activeSection === item.id 
              ? "text-luxury-gold scale-125" 
              : "text-luxury-dim hover:text-white"
          )}
        >
          <item.icon size={18} />
          
          {/* Tooltip */}
          <span className="absolute left-16 px-3 py-1 bg-luxury-gold text-luxury-black text-xs font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
