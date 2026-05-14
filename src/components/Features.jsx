import React from 'react';
import { Shield, Zap, Target, Cpu, Layers, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: "GSM Management",
      description: [
        "Cost saving analysis",
        "Management system implementation",
        "Tariff optimisation",
        "Daily / Weekly / Monthly reports",
        "Device Supply"
      ],
      icon: <Cpu className="text-red" />,
      size: "medium",
      image: "https://images.unsplash.com/photo-1601343521361-82550993081e?w=800&auto=format&fit=crop"
    },
    {
      title: "IT Equipment Supply ",
      description: [
        "Hardware",
        "IT Peripheral",
      ],
      icon: <Cpu className="text-red" />,
      size: "medium"
    },
    {
      title: "Consultation",
      description: "Tailored advice and solutions to meet unique business requirements.",
      icon: <Target className="text-red" />,
      size: "small"
    },
    {
      title: "Microsoft Services",
      description: "Sharepoint online, Power Apps, Automate, Dynamics 365 and Business Central.",
      icon: <Globe className="text-red" />,
      size: "medium"
    },
    {
      title: "Signal Boosters",
      description: "Cutting-edge solutions to enhance mobile and wireless coverage.",
      icon: <Zap className="text-red" />,
      size: "medium"
    },
    {
      title: "Cabling Solutions",
      description: [
        "Network Cabling",
        "Network cables Cat6e"
      ],
      icon: <Layers className="text-red" />,
      size: "small"
    },
    {
      title: "System Management",
      description: "Regular system checks, updates, and troubleshooting services.",
      icon: <Shield className="text-red" />,
      size: "small"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="section-padding" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle">Our Services</span>
          <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">Comprehensive telecom solutions designed to meet the evolving needs of your business.</p>
        </motion.div>

        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`feature-card glass ${feature.size}`}
            >
              <div className="card-top">
                <div className="icon-wrapper">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <div className="feature-desc">
                  {Array.isArray(feature.description) ? (
                    <div className="feature-list">
                      {feature.description.map((item, i) => (
                        <div className="feature-item" key={i}>{item},</div>
                      ))}
                    </div>
                  ) : (
                    <p>{feature.description}</p>
                  )}
                </div>
              </div>
              {feature.image && (
                <div className="card-visual">
                  <img src={feature.image} alt={feature.title} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 4rem;
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
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(320px, auto);
          grid-auto-flow: dense;
          gap: 1.5rem;
        }
        .feature-card {
          border-radius: 24px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease;
          height: 100%;
        }
        .feature-card:hover {
          transform: translateY(-5px) scale(1.02);
          border-color: rgba(225, 29, 72, 0.4);
          box-shadow: 0 10px 30px -10px rgba(225, 29, 72, 0.3);
        }
        .feature-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
        .large {
          grid-column: span 2;
          grid-row: span 2;
        }
        .medium {
          grid-column: span 2;
        }
        .small {
          grid-column: span 1;
        }
        .icon-wrapper {
          margin-bottom: 1.5rem;
          width: 48px;
          height: 48px;
          background: rgba(255,255,255,0.03);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feature-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .feature-desc {
          color: var(--text-secondary);
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .feature-item {
          margin-bottom: 0.25rem;
        }
        .card-visual {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          opacity: 0.5;
          mask-image: linear-gradient(to top, black, transparent);
        }
        .card-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .large, .medium, .small {
            grid-column: span 2;
            height: auto;
            min-height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
