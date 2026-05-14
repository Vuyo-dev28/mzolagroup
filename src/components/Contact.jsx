import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge">Contact Us</span>
          <h2 className="section-title">Get in <span className="text-red">Touch</span></h2>
          <p className="section-subtitle">We're here to help you revolutionize your telecoms infrastructure.</p>
        </motion.div>

        <div className="contact-layout">
          {/* Information Side */}
          <motion.div 
            className="info-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div className="info-item glass" variants={itemVariants}>
              <div className="icon-box"><Phone size={24} /></div>
              <div className="text-box">
                <h3>Call Us</h3>
                <p>+27 12 345 6789</p>
              </div>
            </motion.div>

            <motion.div className="info-item glass" variants={itemVariants}>
              <div className="icon-box"><Mail size={24} /></div>
              <div className="text-box">
                <h3>Email Us</h3>
                <p>info@heytatelecoms.co.za</p>
              </div>
            </motion.div>

            <motion.div className="info-item glass" variants={itemVariants}>
              <div className="icon-box"><MapPin size={24} /></div>
              <div className="text-box">
                <h3>Visit Us</h3>
                <p>Gauteng, South Africa</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            className="form-wrapper glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <select required defaultValue="">
                  <option value="" disabled>What do you need help with?</option>
                  <option value="gsm-management">GSM Management</option>
                  <option value="it-equipment">IT Equipment Supply</option>
                  <option value="consultation">Consultation</option>
                  <option value="microsoft-services">Microsoft Services</option>
                  <option value="signal-boosters">Signal Boosters</option>
                  <option value="cabling-solutions">Cabling Solutions</option>
                  <option value="system-management">System Management</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 100px 0;
          background: #2a2a2a;
          position: relative;
          overflow: hidden;
        }
        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: radial-gradient(circle at 80% 50%, rgba(225, 29, 72, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(225, 29, 72, 0.1);
          color: #E11D48;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1rem;
          border: 1px solid rgba(225, 29, 72, 0.2);
        }
        .section-title {
          font-size: 2.5rem;
          color: #ffffff !important;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: flex-start;
        }

        .info-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          padding: 2rem;
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .info-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(225, 29, 72, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .icon-box {
          color: #E11D48;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(225, 29, 72, 0.1);
          padding: 1rem;
          border-radius: 1rem;
        }

        .text-box h3 {
          color: white;
          margin-bottom: 0.25rem;
          font-size: 1.25rem;
        }

        .text-box p {
          color: #a0a0a0;
          margin: 0;
        }

        .form-wrapper {
          padding: 3rem;
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1.5rem center;
          background-size: 1em;
        }

        .form-group select option {
          background: #2a2a2a;
          color: white;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: rgba(225, 29, 72, 0.5);
          background: rgba(0, 0, 0, 0.3);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: #E11D48;
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: #be123c;
          transform: translateY(-2px);
        }

        @media (max-width: 992px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .section-title {
            font-size: 2.5rem;
          }
          .form-wrapper {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
