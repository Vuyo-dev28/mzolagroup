import React from 'react';
import { Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <section id="partners" className="partners-section section-padding">
      <div className="container">
        <motion.div
          className="partners-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="partners-header">
            <div className="icon-wrapper">
              <Share2 size={32} className="text-red" />
            </div>
            <h2 className="section-title"><span style={{ color: 'gray' }}>Official</span> <span className="text-gradient">Partners</span></h2>
            <p className="section-subtitle text-dark">We collaborate with industry leaders to deliver the best telecommunications value to our clients.</p>
          </div>

          <div className="partner-grid">
            <div className="partner-card centered">
              <div className="partner-logo-container">
                <div className="partner-logo-box">
                  <img src="/images/melon_logo.png" alt="Melon Mobile" className="partner-logo-img" />
                </div>
                {/* <div className="partner-badge">Official Partner</div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .partners-section {
          background-color: #f5f5f5;
          position: relative;
          z-index: 1;
          padding: 60px 0; /* Tightened section padding */
        }
        .partners-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }
        .partners-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          color: #000000 !important;
          font-weight: 800;
        }
        .section-subtitle.text-dark {
          font-size: 1.125rem;
          color: #444 !important;
          max-width: 600px;
          margin: 0 auto;
        }
        .icon-wrapper {
          margin: 0 auto 1.25rem;
          width: 52px;
          height: 52px;
          background: rgba(225, 29, 72, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(225, 29, 72, 0.2);
        }
        .partner-grid {
          display: flex;
          justify-content: center;
        }
        .partner-card {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .partner-logo-container {
          text-align: center;
          padding: 1.5rem 3rem;
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .partner-logo-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .partner-logo-img {
          height: 180px; /* Bigger logo */
          width: auto;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .partner-logo-container:hover .partner-logo-img {
          transform: scale(1.05);
        }
        .partner-badge {
          display: inline-block;
          margin-top: 1rem;
          padding: 6px 16px;
          background: #E11D48;
          color: white;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .partners-section {
            padding: 40px 0;
          }
          .section-title {
            font-size: 2rem;
          }
          .partner-logo-img {
            height: 100px;
          }
          .partner-logo-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
