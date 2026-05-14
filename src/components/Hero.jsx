import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 1
      }
    }
  };

  return (
    <section className="hero-section section-padding">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="tag-wrapper" variants={itemVariants}>
            <span className="tag" style={{ borderColor: 'rgba(225, 29, 72, 0.5)', background: 'rgba(225, 29, 72, 0.15)' }}>Introducing Solar Sun Cash</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Solar Sun Cash <br />
            <span className="text-gradient">Renewable Energy Solutions </span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            <span className="text-red">Solar Sun Cash</span> is an emerging renewable energy provider, dedicated to offering high-quality solar solutions and sustainable power to businesses and individuals.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#services" className="btn btn-primary">
              Our Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-glass">
              Contact Us
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <span className="stat-value">Our Vision</span>
              <span className="stat-label">Leading provider of integrated telecom infrastructure solutions.</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">Our Mission</span>
              <span className="stat-label">Empower businesses with cutting-edge telecom solutions.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 160px;
          position: relative;
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          margin-bottom: 80px;
        }
        .tag-wrapper {
          margin-bottom: 24px;
        }
        .tag {
          background: rgba(225, 29, 72, 0.1);
          border: 1px solid rgba(225, 29, 72, 0.2);
          color: #E11D48;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 24px;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 40px;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 60px;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          padding: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #E11D48;
        }
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.05);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-stats { flex-direction: column; gap: 2rem; }
          .stat-divider { display: none; }
          .hero-actions { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
