// components/About.js
import React, { useEffect, useRef } from 'react';
import { 
  Target, Users, Globe, Shield, Zap, TrendingUp, 
  Award, Heart, Lightbulb, Rocket, Sparkles, ArrowRight,
  Calendar, MapPin, BarChart, Users as UsersIcon
} from 'lucide-react';

const About = () => {
  const canvasRef = useRef(null);
  const valuesRef = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    // Observe all value cards and timeline items
    document.querySelectorAll('.value-card-modern, .timeline-item, .stat-circle').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const values = [
    {
      icon: <Rocket size={28} />,
      title: "Innovation First",
      description: "We embrace cutting-edge technology and creative solutions to stay ahead of market trends and deliver exceptional value.",
      color: "#3B82F6",
      gradient: "from-blue-500 to-cyan-400",
      stats: "+40% YoY Innovation"
    },
    {
      icon: <Heart size={28} />,
      title: "People Centric",
      description: "Our success is built on talented teams and satisfied customers. We invest in people and nurture lasting relationships.",
      color: "#EC4899",
      gradient: "from-pink-500 to-rose-400",
      stats: "98% Employee Satisfaction"
    },
    {
      icon: <Globe size={28} />,
      title: "Global Impact",
      description: "Operating across continents while maintaining local relevance. We create sustainable solutions with worldwide impact.",
      color: "#10B981",
      gradient: "from-emerald-500 to-teal-400",
      stats: "15+ Countries"
    },
    {
      icon: <Shield size={28} />,
      title: "Integrity Driven",
      description: "Ethical practices and transparency form our foundation. We build trust through consistent, responsible operations.",
      color: "#8B5CF6",
      gradient: "from-violet-500 to-purple-400",
      stats: "ISO 9001 Certified"
    }
  ];

  const timeline = [
    { year: "2010", title: "Foundation", description: "Miposh Travels & Tour established", icon: <Calendar size={20} /> },
    { year: "2013", title: "First Expansion", description: "Added Kids Gadget & Real Estate divisions", icon: <TrendingUp size={20} /> },
    { year: "2016", title: "Diversification", description: "Entered farming and healthcare sectors", icon: <UsersIcon size={20} /> },
    { year: "2019", title: "Tech Launch", description: "Founded Master's Soft Info Tech", icon: <Zap size={20} /> },
    { year: "2023", title: "Global Presence", description: "Operations expanded to 15+ countries", icon: <MapPin size={20} /> }
  ];

  const stats = [
    { value: "13+", label: "Years of Excellence", icon: <Award /> },
    { value: "7", label: "Industries", icon: <BarChart /> },
    { value: "500+", label: "Team Members", icon: <Users /> },
    { value: "1M+", label: "Customers Served", icon: <Heart /> }
  ];

  return (
    <section className="about-modern" id="about">
      {/* Animated background elements */}
      <div className="about-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        
        {/* Grid pattern */}
        <div className="grid-pattern"></div>
        
        {/* Connection lines */}
        <svg className="connection-lines" width="100%" height="100%">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M20,100 Q250,50 480,100" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M500,300 Q600,250 780,300" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M200,400 Q350,450 580,400" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="about-container">
        {/* Header with animated reveal */}
        <div className="about-header">
          <div className="header-badge">
            <Sparkles size={16} />
            <span>Our Story</span>
          </div>
          <h2 className="about-title">
            <span className="title-line">Building the Future,</span>
            <span className="title-line gradient-text">One Industry at a Time</span>
          </h2>
          <p className="about-subtitle">
            A dynamic conglomerate transforming seven industries through innovation, 
            strategic partnerships, and sustainable growth practices.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="stats-overview">
          {stats.map((stat, index) => (
            <div key={index} className="stat-circle" style={{ '--delay': index * 0.1 }}>
              <div className="stat-circle-inner">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-glow" style={{ background: stat.color }}></div>
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="about-content-sections">
          {/* Left Column - Story */}
          <div className="story-section">
            <div className="section-header-modern">
              <h3 className="section-title-modern">
                From Vision to Reality
                <div className="title-underline"></div>
              </h3>
              <p className="section-description">
                Founded in 2010, Miposh Group began as a single vision to transform 
                the travel industry. Today, we're a diversified powerhouse spanning 
                seven specialized sectors, each pushing the boundaries of innovation.
              </p>
            </div>

            <div className="story-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <Zap size={24} />
                  <div className="highlight-glow"></div>
                </div>
                <div className="highlight-content">
                  <h4>Continuous Innovation</h4>
                  <p>Investing 15% of revenue into R&D across all subsidiaries</p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <TrendingUp size={24} />
                  <div className="highlight-glow"></div>
                </div>
                <div className="highlight-content">
                  <h4>Sustainable Growth</h4>
                  <p>35% average annual growth while maintaining profitability</p>
                </div>
              </div>
            </div>

            <a href="#companies" className="explore-link">
              <span>Explore Our Portfolio</span>
              <ArrowRight size={18} />
              <div className="link-glow"></div>
            </a>
          </div>

          {/* Right Column - Timeline */}
          <div className="timeline-section">
            <h3 className="timeline-title">Our Journey</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item" style={{ '--index': index }}>
                  <div className="timeline-marker">
                    <div className="marker-circle"></div>
                    <div className="marker-line"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-header">
                      <div className="timeline-icon">{item.icon}</div>
                      <h4 className="timeline-item-title">{item.title}</h4>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="values-section-modern">
          <div className="values-header">
            <h3 className="values-title">
              Our Guiding Principles
              <div className="title-sparkle">
                <Sparkles size={20} />
              </div>
            </h3>
            <p className="values-subtitle">
              The foundation of our success across seven diverse industries
            </p>
          </div>

          <div className="values-grid-modern">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card-modern"
                style={{ 
                  '--card-color': value.color,
                  '--delay': index * 0.2,
                  '--gradient': value.gradient
                }}
              >
                <div className="card-glow"></div>
                <div className="card-inner">
                  <div className="value-icon-wrapper">
                    <div className="value-icon-modern">
                      {value.icon}
                    </div>
                    <div className="icon-ring"></div>
                  </div>
                  <h4 className="value-title-modern">{value.title}</h4>
                  <p className="value-description-modern">{value.description}</p>
                  <div className="value-stats">
                    <div className="stats-badge">
                      {value.stats}
                    </div>
                  </div>
                  <div className="card-hover-content">
                    <div className="hover-glow"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="vision-statement">
          <div className="vision-card">
            <div className="vision-content">
              <div className="vision-icon">
                <Target size={32} />
                <div className="vision-glow"></div>
              </div>
              <div>
                <h3 className="vision-title">Our Vision for 2030</h3>
                <p className="vision-text">
                  To become the world's most trusted diversified conglomerate, 
                  transforming 10+ industries through sustainable innovation, 
                  creating value for stakeholders, and shaping a better future 
                  for generations to come.
                </p>
              </div>
            </div>
            <div className="vision-progress">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="progress-stats">
                <span>7/10 Industries</span>
                <span>70% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;