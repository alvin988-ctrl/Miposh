// components/Stats.js
import React, { useState, useEffect } from 'react';
import { Users, Globe, TrendingUp, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <Users />, value: '500+', label: 'Employees Worldwide' },
    { icon: <Globe />, value: '15+', label: 'Countries Served' },
    { icon: <TrendingUp />, value: '95%', label: 'Customer Satisfaction' },
    { icon: <Award />, value: '25+', label: 'Industry Awards' },
  ];

  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const target = parseInt(stat.value);
      const increment = target / 100;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals[index]);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="stats">
      <div className="section-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3 className="stat-value">
                  {stat.value.includes('+') || stat.value.includes('%') 
                    ? `${counters[index]}${stat.value.slice(-1)}`
                    : counters[index]}
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;