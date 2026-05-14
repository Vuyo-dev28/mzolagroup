import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Scout",
      price: "$29",
      desc: "Perfect for individuals and solo starters.",
      features: ["3 Projects", "Basic AI Models", "Standard Support", "5GB Storage"],
      highlight: false
    },
    {
      name: "Pathfinder",
      price: "$99",
      desc: "Designed for scaling startups and teams.",
      features: ["Unlimited Projects", "Premium AI Models", "24/7 Priority Support", "50GB Storage", "Custom Integrations"],
      highlight: true
    },
    {
      name: "Nexus",
      price: "$249",
      desc: "Enterprise-grade power and security.",
      features: ["Everything in Pathfinder", "Dedicated Account Manager", "Custom Model Training", "Unlimited Storage", "Whitelabeling"],
      highlight: false
    }
  ];

  return (
    <section className="section-padding" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple <span className="text-gradient">Pricing</span></h2>
          <p className="section-subtitle">Choose the plan that's right for your ambition.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`pricing-card glass ${plan.highlight ? 'highlight' : ''}`}
            >
              {plan.highlight && <div className="popular-tag">Most Popular</div>}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price.substring(1)}</span>
                  <span className="period">/mo</span>
                </div>
                <p className="plan-desc">{plan.desc}</p>
              </div>

              <div className="plan-features">
                {plan.features.map((f, i) => (
                  <div key={i} className="feature-item">
                    <Check size={16} className="text-blue-500" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button className={`btn w-full justify-center ${plan.highlight ? 'btn-primary' : 'btn-glass'}`}>
                {plan.name === 'Nexus' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 40px;
        }
        .pricing-card {
          border-radius: 32px;
          padding: 3rem 2rem;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .highlight {
          background: rgba(45, 58, 238, 0.05);
          border-color: rgba(45, 58, 238, 0.3);
          box-shadow: 0 0 40px rgba(45, 58, 238, 0.1);
        }
        .popular-tag {
          position: absolute;
          top: 24px;
          right: 24px;
          background: #2D3AEE;
          color: white;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        .plan-name {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .plan-price {
          display: flex;
          align-items: baseline;
          margin-bottom: 1rem;
        }
        .currency { font-size: 1.5rem; font-weight: 700; color: var(--text-secondary); }
        .amount { font-size: 3.5rem; font-weight: 700; }
        .period { color: var(--text-secondary); font-size: 1rem; }
        .plan-desc {
          color: var(--text-secondary);
          font-size: 0.9375rem;
          margin-bottom: 2rem;
        }
        .plan-features {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9375rem;
        }
        
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
