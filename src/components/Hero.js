// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Sparkles, TrendingUp, Globe, Zap } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticles = () => {
      const particles = [];
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`
        });
      }
      return particles;
    };

    particlesRef.current = createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.1)');
      gradient.addColorStop(1, 'rgba(30, 41, 59, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stats = [
    { icon: <TrendingUp />, value: '500+', label: 'Professionals' },
    { icon: <Globe />, value: '15+', label: 'Countries' },
    { icon: <Zap />, value: '7', label: 'Industries' },
  ];

  return (
    <section className="hero" id="home">
      {/* Animated background canvas */}
      <canvas 
        ref={canvasRef} 
        className="hero-canvas"
      />
      
      {/* Animated gradient orbs */}
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Animated badge */}
          <div className="hero-badge-container">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span className="badge-text">Innovation Leader Since 2010</span>
              <div className="badge-glow"></div>
            </div>
          </div>

          {/* Main heading with typewriter effect */}
          <div className="hero-heading">
            <h1 className="hero-title">
              <span className="title-line">Redefining</span>
              <span className="title-line">
                <span className="gradient-text">Business Excellence</span>
                <span className="cursor"></span>
              </span>
              <span className="title-line">Across Industries</span>
            </h1>
            
            {/* Animated subtitle */}
            <div className="hero-subtitle">
              <p className="hero-description">
                Miposh Group transforms industries through innovation, technology, 
                and strategic partnerships. We're building the future one sector at a time.
              </p>
            </div>
          </div>

          {/* Stats bar */}
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-glow"></div>
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="hero-actions">
            <div className="hero-buttons">
              <a href="#companies" className="btn-primary">
                <span className="btn-text">Explore Our Portfolio</span>
                <div className="btn-icon">
                  <ArrowRight size={20} />
                  <div className="btn-glow"></div>
                </div>
              </a>
              
              <a href="#contact" className="btn-secondary">
                <span className="btn-text">Partner With Us</span>
                <ChevronRight size={18} className="btn-chevron" />
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-dot"></div>
                <span className="trust-text">ISO 9001 Certified</span>
              </div>
              <div className="trust-item">
                <div className="trust-dot"></div>
                <span className="trust-text">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Visual Section */}
        <div className="hero-visual">
          {/* Interactive 3D grid */}
          <div className="interactive-grid">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="grid-cell">
                <div className="cell-content">
                  <div className="cell-icon">
                    {['✈️', '🚗', '🏢', '🚜', '💆', '🔧', '💻', '⭐', '⚡'][index]}
                  </div>
                  <div className="cell-glow"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating cards with depth effect */}
          <div className="floating-cards-modern">
            {[
              { icon: '✈️', label: 'Travel', color: '#3B82F6' },
              { icon: '💻', label: 'Tech', color: '#8B5CF6' },
              { icon: '🏢', label: 'Real Estate', color: '#10B981' },
            ].map((card, index) => (
              <div 
                key={index} 
                className="floating-card-modern"
                style={{ 
                  '--card-color': card.color,
                  '--delay': index * 0.2,
                  '--depth': index * 10
                }}
              >
                <div className="card-inner">
                  <div className="card-icon">{card.icon}</div>
                  <div className="card-label">{card.label}</div>
                  <div className="card-glow" style={{ background: card.color }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated lines */}
          <div className="animated-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <div className="scroll-text">Scroll to explore</div>
      </div>
    </section>
  );
};

export default Hero;