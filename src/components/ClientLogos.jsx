import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos = () => {
  const handleImageError = (event) => {
    event.currentTarget.src = '/images/gallery/gallery-01.png'
  }

  const clients = [
    { name: "Hitachi", image: "/images/gallery/gallery-10.png", showName: false },
    { name: "Mago", image: "/images/gallery/gallery-11.png", showName: false },
    { name: "Marthinusen & Coutts", image: "/images/gallery/gallery-12.png", showName: true },
    { name: "QUEENS NEST FARMS", image: "/images/gallery/gallery-13.png", showName: true },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[rgb(var(--muted))] mb-10"
        >
          Trusted by Industry Leaders
        </motion.p>
        
        <div className="relative">
          {/* Gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[rgb(var(--bg))] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[rgb(var(--bg))] to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-20 items-center whitespace-nowrap"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                <div key={index} className="flex items-center gap-4 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300" 
                    onError={handleImageError}
                  />
                  {client.showName && (
                    <span className="text-lg font-bold text-[rgb(var(--fg))] tracking-tight group-hover:text-[rgb(var(--brand))] transition-colors">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
