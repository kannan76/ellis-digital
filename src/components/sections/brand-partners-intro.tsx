"use client";

import { useEffect, useRef, useState } from "react";

const BrandPartnersIntro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary-black py-24 sm:py-28 md:py-32" data-scroll-section>
      <div className="container">
        <div
          className={`transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="mx-auto max-w-5xl text-center font-display text-4xl font-semibold leading-tight tracking-[-0.01em] text-primary-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.2]">
            Celebrating Our Students’ Success & Achievements
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersIntro;
