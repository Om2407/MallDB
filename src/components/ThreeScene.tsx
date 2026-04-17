import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, PerspectiveCamera, PresentationControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, ShoppingBag, Music, Info } from 'lucide-react';

const VENUES = [
  {
    id: 'avenue',
    name: 'The Avenue',
    type: 'Luxury Retail',
    pos: [-2, 0, 0],
    color: '#C5A059',
    details: {
      hours: '11:00 AM - 7:00 PM',
      icon: ShoppingBag,
      content: 'Home to flagship boutiques including Hermès, Gucci, and Saint Laurent.',
      meta: '450+ Brands'
    }
  },
  {
    id: 'waterpark',
    name: 'DreamWorks Water Park',
    type: 'Entertainment',
    pos: [2, 1, 0],
    color: '#00A3E0',
    details: {
      hours: '11:00 AM - 8:00 PM',
      icon: Info,
      content: 'North America\'s largest indoor water park. 81°F year-round.',
      meta: 'Record-Breaking Slides'
    }
  },
  {
    id: 'arena',
    name: 'The Arena',
    type: 'Events',
    pos: [0, -1.5, 0],
    color: '#A855F7',
    details: {
      hours: 'Event Dependent',
      icon: Music,
      content: 'State-of-the-art concert venue hosting global icons and activations.',
      meta: '5,000 Capacity'
    }
  }
];

function VenueModel({ venue, onSelect, isSelected }: { venue: typeof VENUES[0], onSelect: (v: any) => void, isSelected: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (isSelected) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = venue.pos[1] + Math.sin(t + venue.pos[0]) * 0.1;
  });

  return (
    <group position={venue.pos as [number, number, number]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh 
          ref={meshRef}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onClick={() => onSelect(venue)}
        >
          <boxGeometry args={[1.2, 1.8, 0.4]} />
          <MeshDistortMaterial
            color={isSelected ? '#ffffff' : venue.color}
            speed={isSelected ? 5 : 2}
            distort={0.3}
            radius={1}
            emissive={venue.color}
            emissiveIntensity={hovered || isSelected ? 0.5 : 0.2}
          />
        </mesh>
        
        <Text
          position={[0, 1.2, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGkyMZhrib2Bg-4.woff"
        >
          {venue.name.toUpperCase()}
        </Text>
      </Float>
    </group>
  );
}

export default function ThreeScene() {
  const [selectedVenue, setSelectedVenue] = useState<typeof VENUES[0] | null>(null);

  return (
    <div className="w-full h-full min-h-[400px] relative group">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <PresentationControls
          global
          snap
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
        >
          {VENUES.map((venue) => (
            <VenueModel 
              key={venue.id} 
              venue={venue} 
              onSelect={setSelectedVenue}
              isSelected={selectedVenue?.id === venue.id}
            />
          ))}
          
          <gridHelper args={[20, 20, 0x444444, 0x222222]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -2]} />
        </PresentationControls>
      </Canvas>

      {/* Overlay Details */}
      <AnimatePresence>
        {selectedVenue && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-8 right-8 w-72 glass p-6 rounded-2xl z-20 border-l-4"
            style={{ borderLeftColor: selectedVenue.color }}
          >
            <button 
              onClick={() => setSelectedVenue(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white"
            >
              <X size={16} />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/10" style={{ color: selectedVenue.color }}>
                <selectedVenue.details.icon size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif italic text-lg leading-none">{selectedVenue.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{selectedVenue.type}</p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed mb-6">
              {selectedVenue.details.content}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/50">
                <Clock size={14} className="text-luxury-gold" />
                <span>{selectedVenue.details.hours}</span>
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-luxury-gold font-bold bg-luxury-gold/5 p-2 rounded border border-luxury-gold/10">
                <span>{selectedVenue.details.meta}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedVenue && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            Click a Venue to Explore Details
          </p>
        </div>
      )}
    </div>
  );
}
