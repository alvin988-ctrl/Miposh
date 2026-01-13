// components/Companies.js
import React, { useEffect, useRef, useState } from 'react';
import { 
  ExternalLink, ArrowRight, Zap, TrendingUp, Users, 
  Globe, Shield, Sparkles, ChevronRight, Play, Pause,
  Maximize2, X, Filter, Search, Grid, List
} from 'lucide-react';

const Companies = ({ subsidiaries, activeCompany, setActiveCompany }) => {
  const containerRef = useRef(null);
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const [fullscreenCompany, setFullscreenCompany] = useState(null);

  useEffect(() => {
    // Auto-rotate active company
    let interval;
    if (isPlaying && subsidiaries.length > 0) {
      interval = setInterval(() => {
        setActiveCompany(prev => {
          if (prev === null || prev >= subsidiaries.length) return 1;
          return prev % subsidiaries.length + 1;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, subsidiaries.length, setActiveCompany]);

  // Filter companies based on search and filter
  const filteredCompanies = subsidiaries.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || company.category === filter;
    return matchesSearch && matchesFilter;
  });

  const categories = [
    { id: 'all', label: 'All Industries', count: subsidiaries.length },
    { id: 'travel', label: 'Travel & Tourism', count: subsidiaries.filter(c => c.category === 'travel').length },
    { id: 'tech', label: 'Technology', count: subsidiaries.filter(c => c.category === 'tech').length },
    { id: 'realestate', label: 'Real Estate', count: subsidiaries.filter(c => c.category === 'realestate').length },
    { id: 'healthcare', label: 'Healthcare', count: subsidiaries.filter(c => c.category === 'healthcare').length },
    { id: 'automotive', label: 'Automotive', count: subsidiaries.filter(c => c.category === 'automotive').length },
    { id: 'agriculture', label: 'Agriculture', count: subsidiaries.filter(c => c.category === 'agriculture').length },
  ];

  const stats = [
    { icon: <Users size={20} />, value: '500+', label: 'Team Members' },
    { icon: <Globe size={20} />, value: '15+', label: 'Countries' },
    { icon: <TrendingUp size={20} />, value: '$250M+', label: 'Annual Revenue' },
    { icon: <Shield size={20} />, value: '100%', label: 'Satisfaction' },
  ];

  return (
    <section className="companies-modern" id="companies" ref={containerRef}>
      {/* Animated Background */}
      <div className="companies-background">
        <div className="floating-shapes">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className="floating-shape"
              style={{
                '--delay': i * 0.5,
                '--size': `${Math.random() * 60 + 20}px`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Interactive Grid */}
        <div className="interactive-grid-bg"></div>
        
        {/* Connection Lines */}
        <svg className="connections" width="100%" height="100%">
          <defs>
            <linearGradient id="connGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      <div className="companies-container">
        {/* Header */}
        <div className="companies-header">
          <div className="header-top">
            <div className="header-badge">
              <Sparkles size={16} />
              <span>Portfolio</span>
            </div>
            <div className="header-controls">
              <button 
                className={`control-btn ${isPlaying ? 'active' : ''}`}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                <span>{isPlaying ? 'Pause' : 'Play'} Auto-view</span>
              </button>
            </div>
          </div>
          
          <div className="header-main">
            <h2 className="companies-title">
              <span className="title-line">Our Diverse</span>
              <span className="title-line gradient-text">Business Portfolio</span>
            </h2>
            <p className="companies-subtitle">
              Seven specialized companies, each a leader in its industry, 
              working together to create unprecedented value across sectors.
            </p>
          </div>
          
          {/* Stats Bar */}
          <div className="stats-bar">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item-compact">
                <div className="stat-icon-compact">{stat.icon}</div>
                <div className="stat-content-compact">
                  <div className="stat-value-compact">{stat.value}</div>
                  <div className="stat-label-compact">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="companies-controls">
          <div className="search-container">
            <div className="search-input">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-field"
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery('')}>
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          
          <div className="filters">
            <div className="filter-tabs">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-tab ${filter === category.id ? 'active' : ''}`}
                  onClick={() => setFilter(category.id)}
                >
                  <span className="filter-label">{category.label}</span>
                  <span className="filter-count">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="view-toggle">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={20} />
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="companies-main">
          {/* Sidebar - Active Company Details */}
          <div className="companies-sidebar">
            <div className="sidebar-header">
              <h3 className="sidebar-title">
                <Zap size={20} />
                <span>Featured Company</span>
              </h3>
              <div className="active-indicator">
                <div className="pulse-dot"></div>
                <span>Active</span>
              </div>
            </div>
            
            {subsidiaries.find(c => c.id === activeCompany) && (
              <div className="active-company-card">
                <div 
                  className="active-company-icon"
                  style={{ background: `linear-gradient(135deg, ${subsidiaries.find(c => c.id === activeCompany).color}30, ${subsidiaries.find(c => c.id === activeCompany).color}10)` }}
                >
                  <span className="icon-large">{subsidiaries.find(c => c.id === activeCompany).icon}</span>
                </div>
                <h4 className="active-company-name">
                  {subsidiaries.find(c => c.id === activeCompany).name}
                </h4>
                <p className="active-company-tagline">
                  {subsidiaries.find(c => c.id === activeCompany).tagline}
                </p>
                <p className="active-company-description">
                  {subsidiaries.find(c => c.id === activeCompany).description}
                </p>
                
                <div className="active-company-stats">
                  <div className="company-stat">
                    <div className="stat-badge">Est.</div>
                    <div className="stat-value">2010</div>
                  </div>
                  <div className="company-stat">
                    <div className="stat-badge">Revenue</div>
                    <div className="stat-value">$50M+</div>
                  </div>
                  <div className="company-stat">
                    <div className="stat-badge">Growth</div>
                    <div className="stat-value">+35%</div>
                  </div>
                </div>
                
                <div className="active-company-actions">
                  <button className="action-btn primary">
                    <ExternalLink size={16} />
                    <span>Visit Website</span>
                  </button>
                  <button 
                    className="action-btn secondary"
                    onClick={() => setFullscreenCompany(activeCompany)}
                  >
                    <Maximize2 size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            )}
            
            <div className="sidebar-stats">
              <h4 className="stats-title">Portfolio Health</h4>
              <div className="health-metrics">
                <div className="health-metric">
                  <div className="metric-label">Diversity Score</div>
                  <div className="metric-value">95%</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="health-metric">
                  <div className="metric-label">Growth Index</div>
                  <div className="metric-value">+42%</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="health-metric">
                  <div className="metric-label">Synergy Score</div>
                  <div className="metric-value">78%</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Companies Grid/List */}
          <div className={`companies-display ${viewMode}`}>
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className={`company-card-modern ${activeCompany === company.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCompany(company.id)}
                onClick={() => setActiveCompany(company.id)}
                style={{
                  '--company-color': company.color,
                  '--delay': company.id * 0.1,
                }}
              >
                <div className="card-glow-container">
                  <div className="card-glow" style={{ background: company.color }}></div>
                </div>
                
                <div className="card-header">
                  <div className="company-icon-wrapper">
                    <div 
                      className="company-icon-modern"
                      style={{ 
                        background: `linear-gradient(135deg, ${company.color}40, ${company.color}20)`,
                        borderColor: `${company.color}40`
                      }}
                    >
                      <span className="icon-emoji">{company.icon}</span>
                      <div className="icon-glow" style={{ background: company.color }}></div>
                    </div>
                    <div className="company-badge-modern">
                      <span className="badge-text">Subsidiary</span>
                      <div className="badge-dot"></div>
                    </div>
                  </div>
                  
                  <div className="company-quick-stats">
                    <div className="quick-stat">
                      <TrendingUp size={14} />
                      <span>+{Math.floor(Math.random() * 30) + 20}%</span>
                    </div>
                    <div className="quick-stat">
                      <Users size={14} />
                      <span>{Math.floor(Math.random() * 200) + 50}</span>
                    </div>
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="company-name-modern">{company.name}</h3>
                  <p className="company-tagline-modern">{company.tagline}</p>
                  <p className="company-description-modern">{company.description}</p>
                  
                  <div className="company-features">
                    {company.features?.slice(0, 3).map((feature, index) => (
                      <div key={index} className="feature-tag">
                        <ChevronRight size={12} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-footer">
                  <div className="company-category">
                    <span className="category-badge">{company.category}</span>
                  </div>
                  <button className="company-action-btn">
                    <ArrowRight size={18} />
                  </button>
                </div>
                
                <div className="card-hover-overlay">
                  <div className="hover-content">
                    <div className="hover-icon">
                      <Maximize2 size={24} />
                    </div>
                    <span className="hover-text">View Details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="companies-legend">
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#3B82F6' }}></div>
            <span>Travel & Tourism</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#10B981' }}></div>
            <span>Family Services</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#8B5CF6' }}></div>
            <span>Real Estate</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#22C55E' }}></div>
            <span>Agriculture</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#EC4899' }}></div>
            <span>Healthcare</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#F59E0B' }}></div>
            <span>Automotive</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#6366F1' }}></div>
            <span>Technology</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenCompany && (
        <div className="fullscreen-modal">
          <div className="modal-backdrop" onClick={() => setFullscreenCompany(null)}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setFullscreenCompany(null)}>
              <X size={24} />
            </button>
            
            {subsidiaries.find(c => c.id === fullscreenCompany) && (
              <div className="modal-body">
                <div className="modal-header">
                  <div 
                    className="modal-icon"
                    style={{ background: subsidiaries.find(c => c.id === fullscreenCompany).color }}
                  >
                    {subsidiaries.find(c => c.id === fullscreenCompany).icon}
                  </div>
                  <div>
                    <h2 className="modal-title">
                      {subsidiaries.find(c => c.id === fullscreenCompany).name}
                    </h2>
                    <p className="modal-subtitle">
                      {subsidiaries.find(c => c.id === fullscreenCompany).tagline}
                    </p>
                  </div>
                </div>
                
                <div className="modal-grid">
                  <div className="modal-section">
                    <h3>Overview</h3>
                    <p>{subsidiaries.find(c => c.id === fullscreenCompany).description}</p>
                  </div>
                  
                  <div className="modal-section">
                    <h3>Key Features</h3>
                    <div className="features-grid">
                      {subsidiaries.find(c => c.id === fullscreenCompany).features?.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <Zap size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-section">
                    <h3>Performance Metrics</h3>
                    <div className="metrics-grid">
                      <div className="metric-item">
                        <div className="metric-value">$50M+</div>
                        <div className="metric-label">Annual Revenue</div>
                      </div>
                      <div className="metric-item">
                        <div className="metric-value">+35%</div>
                        <div className="metric-label">YoY Growth</div>
                      </div>
                      <div className="metric-item">
                        <div className="metric-value">95%</div>
                        <div className="metric-label">Customer Satisfaction</div>
                      </div>
                      <div className="metric-item">
                        <div className="metric-value">50+</div>
                        <div className="metric-label">Countries Served</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button className="modal-btn primary">
                    <ExternalLink size={18} />
                    <span>Visit Official Website</span>
                  </button>
                  <button className="modal-btn secondary">
                    <ArrowRight size={18} />
                    <span>Request Partnership</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Companies;