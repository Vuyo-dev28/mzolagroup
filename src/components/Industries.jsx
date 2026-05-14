import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Server, GraduationCap, HeartPulse, ShoppingBag, Factory, Pickaxe, Truck } from 'lucide-react';

const Industries = () => {
  const industries = [
    { name: "Corporate Enterprises", icon: <Building2 size={24} /> },
    { name: "Educational Institutions", icon: <GraduationCap size={24} /> },
    { name: "Healthcare Providers", icon: <HeartPulse size={24} /> },
    { name: "Retail & Hospitality", icon: <ShoppingBag size={24} /> },
    { name: "Industrial & Manufacturing", icon: <Factory size={24} /> },
    { name: "Mining Industry", icon: <Pickaxe size={24} /> },
    { name: "Transport Industry", icon: <Truck size={24} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    whileInView: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="section-padding" id="industries">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle">Expertise</span>
          <h2 className="section-title">Industries <span className="text-gradient">Served</span></h2>
          <p className="section-subtitle">Providing tailored telecom solutions to a wide range of sectors.</p>
        </motion.div>

        <motion.div 
          className="industries-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="industry-card glass"
            >
              <div className="industry-icon">{item.icon}</div>
              <span className="industry-name">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="industries-visual-wrapper"
        >
          <p className="industries-footer-text">
            For businesses looking for a trusted partner to manage and maintain their telecom systems, <span className="text-red">Heyta Telecoms</span> delivers unmatched service and expertise.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .section-header .subtitle {
          color: var(--primary-red);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.875rem;
          display: block;
          margin-bottom: 1rem;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #ffffff !important;
        }
        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .industry-card {
          padding: 2rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .industry-card:hover {
          background: rgba(225, 29, 72, 0.05);
          border-color: rgba(225, 29, 72, 0.4);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 35px -10px rgba(225, 29, 72, 0.2);
        }
        .industry-card:hover .industry-icon {
          transform: scale(1.15) rotate(10deg);
          box-shadow: 0 0 20px rgba(225, 29, 72, 0.3);
        }
        .industry-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(225, 29, 72, 0.1);
          color: #E11D48;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .industry-name {
          font-weight: 500;
          font-size: 1rem;
        }

        .industries-visual-wrapper {
          margin-top: 80px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
        }



        .industries-footer-text {
          font-size: 1.25rem;
          text-align: center;
          color: var(--text-secondary);
          max-width: 800px;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .industries-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .industries-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Industries;
