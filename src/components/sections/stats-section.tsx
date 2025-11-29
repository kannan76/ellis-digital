'use client';

import { useState, useEffect, useRef } from 'react';

// This is a client component because it uses hooks for animation when it comes into view.

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 100, suffix: '%', label: 'Work completed in house' },
  { value: 10, suffix: '+', label: 'Years crafting digital experiences' },
  { value: 150, suffix: '+', label: 'Happy clients' },
];

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) {
      return;
    }

    let start = 0;
    const duration = 2000;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end); // Ensure it ends on the exact number
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-8xl lg:text-9xl font-bold tracking-tight text-white">
      {count}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-primary-black py-24 sm:py-32" data-scroll-section>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a0072] via-[#8B00FF]/30 to-[#000000]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            WHY WORK WITH US?
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Why Work with Us?
          </h2>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-y-16 text-center md:grid-cols-3 md:gap-x-16">
            {stats.map((stat) => (
              <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                {isInView ? (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                ) : (
                  <div className="text-8xl lg:text-9xl font-bold tracking-tight text-white">
                    0{stat.suffix}
                  </div>
                )}
                <p className="text-lg leading-relaxed text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;