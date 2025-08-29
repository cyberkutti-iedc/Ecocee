'use client';

import { useState, useEffect } from 'react';
import { Users, Download, Github, Cpu } from 'lucide-react';

interface StatsData {
  downloads: number;
  github_stars: number;
  active_users: number;
  available_models: number;
}

export default function StatsSection() {
  const [stats, setStats] = useState<StatsData>({
    downloads: 0,
    github_stars: 0,
    active_users: 0,
    available_models: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch stats data
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/kuttai');
        const data = await response.json();

        if (data.error) {
          console.error('Error fetching stats:', data.error);
          setStats({
            downloads: 12543,
            github_stars: 864,
            active_users: 3430,
            available_models: 156,
          });
        } else {
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
        setStats({
          downloads: 12543,
          github_stars: 864,
          active_users: 3430,
          available_models: 156,
        });
      } finally {
        setIsLoading(false);
      }
    };

    // Record page view
    const recordPageView = async () => {
      try {
        await fetch('/api/kuttai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'page_view',
            page: window.location.pathname,
            user_agent: navigator.userAgent,
            referrer: document.referrer || 'direct',
          }),
        });
      } catch (error) {
        console.error('Error recording page view:', error);
      }
    };

    fetchStats();
    recordPageView();
  }, []);

  const StatItem = ({
    icon: Icon,
    value,
    label,
    delay,
  }: {
    icon: React.ComponentType;
    value: number;
    label: string;
    delay: number;
  }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (value > 0) {
        const duration = 2000;
        const steps = 60;
        const stepSize = value / steps;
        let current = 0;

        const timer = setTimeout(() => {
          const interval = setInterval(() => {
            current += stepSize;
            if (current >= value) {
              current = value;
              clearInterval(interval);
            }
            setDisplayValue(Math.floor(current));
          }, duration / steps);
        }, delay);

        return () => clearTimeout(timer);
      }
    }, [value, delay]);

    return (
      <div className="bg-gray-900/50 p-6 rounded-xl text-center flex flex-col items-center justify-center">
        <Icon   />
        <p className="text-3xl font-bold text-white">{displayValue.toLocaleString()}</p>
        <p className="text-gray-300 mt-2">{label}</p>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-950 to-black px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Kuttai <span className="text-green-500">Statistics</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem icon={Download} value={stats.downloads} label="Downloads" delay={0} />
          <StatItem icon={Github} value={stats.github_stars} label="GitHub Stars" delay={200} />
          <StatItem icon={Users} value={stats.active_users} label="Active Users" delay={400} />
          <StatItem icon={Cpu} value={stats.available_models} label="Available Models" delay={600} />
        </div>
      </div>
    </section>
  );
}
