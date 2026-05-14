import React, { useState } from 'react';
import './Portfolio.css';

const portfolioItems = [
  // Cabling Section (4 items)
  { id: 1, title: 'Fibre Optic Infrastructure', category: 'Cabling', image: '/images/cabling/cabling_1.png' },
  { id: 2, title: 'Industrial Network Cabling', category: 'Cabling', image: '/images/cabling/cabling_2.png' },
  { id: 3, title: 'Server Room Organization', category: 'Cabling', image: '/images/cabling/cabling_3.png' },
  { id: 4, title: 'Data Center Deployment', category: 'Cabling', image: '/images/cabling/cabling_4.png' },
  
  // Signal Boost Section (22 items)
  { id: 5, title: 'Signal Enhancement System', category: 'Signal Boost', image: '/images/signal/signal_1.png' },
  { id: 6, title: 'GSM Booster Installation', category: 'Signal Boost', image: '/images/signal/signal_2.png' },
  { id: 7, title: 'Corporate Signal Solution', category: 'Signal Boost', image: '/images/signal/signal_3.png' },
  { id: 8, title: 'LTE Coverage Optimization', category: 'Signal Boost', image: '/images/signal/signal_4.png' },
  { id: 9, title: 'Signal Booster Arrays', category: 'Signal Boost', image: '/images/signal/signal_5.png' },
  { id: 10, title: 'Network Strength Upgrade', category: 'Signal Boost', image: '/images/signal/signal_6.png' },
  { id: 11, title: 'High-Gain Antenna Setup', category: 'Signal Boost', image: '/images/signal/signal_7.png' },
  { id: 12, title: 'Commercial Signal Repeater', category: 'Signal Boost', image: '/images/signal/signal_1 (2).png' },
  { id: 13, title: 'Multi-Floor Signal Distribution', category: 'Signal Boost', image: '/images/signal/signal_1 (3).png' },
  { id: 14, title: 'Enterprise GSM Solution', category: 'Signal Boost', image: '/images/signal/signal_1 (4).png' },
  { id: 15, title: 'Suburban Coverage Boost', category: 'Signal Boost', image: '/images/signal/signal_1 (5).png' },
  { id: 16, title: 'Signal Quality Management', category: 'Signal Boost', image: '/images/signal/signal_1 (6).png' },
  { id: 17, title: 'Remote Site Connectivity', category: 'Signal Boost', image: '/images/signal/signal_1 (7).png' },
  { id: 18, title: 'Wireless Signal Optimization', category: 'Signal Boost', image: '/images/signal/signal_1 (8).png' },
  { id: 19, title: 'Precision Audio/Visual Signal', category: 'Signal Boost', image: '/images/signal/signal_1 (9).png' },
  { id: 20, title: 'Low-Latency Signal Setup', category: 'Signal Boost', image: '/images/signal/signal_1 (10).png' },
  { id: 21, title: 'Tower-Linked Signal Boost', category: 'Signal Boost', image: '/images/signal/signal_1 (11).png' },
  { id: 22, title: 'Secure Signal Networking', category: 'Signal Boost', image: '/images/signal/signal_1 (12).png' },
  { id: 23, title: 'Industrial Booster Array', category: 'Signal Boost', image: '/images/signal/signal_1 (13).png' },
  { id: 24, title: 'Advanced GSM Relay', category: 'Signal Boost', image: '/images/signal/signal_1 (14).png' },
  { id: 25, title: 'High-Density Signal Solution', category: 'Signal Boost', image: '/images/signal/signal_1 (15).png' },
  { id: 26, title: 'Final Signal Calibration', category: 'Signal Boost', image: '/images/signal/signal_1 (16).png' }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  
  const categories = ['All', 'Cabling', 'Signal Boost'];
  
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 4);

  return (
    <section className="portfolio section-padding" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div className="section-title-wrapper">
            <span className="subtitle">Our Work</span>
            <h2>Our <span className="text-gradient">Portfolio</span></h2>
            <p className="text-secondary">Explore some of our recent projects delivering premier telecommunications solutions across South Africa.</p>
          </div>
          
          <div className="portfolio-filters">
            {categories.map((category) => (
              <button 
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false); // Reset to show only 4 when filter changes
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="portfolio-grid">
          {displayedItems.map((item) => (
            <div key={item.id} className="portfolio-item glass">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && filteredItems.length > 4 && (
          <div className="view-more-container">
            <button className="view-more-btn btn-primary" onClick={() => setShowAll(true)}>
              View More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
