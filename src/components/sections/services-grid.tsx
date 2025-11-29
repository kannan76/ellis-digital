"use client";

import React, { useEffect, useRef, useState } from "react";

interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Graphic Design",
    description:
      "We cover a wide range of projects from branding collateral to website design and everything in between. The design solutions we deliver are carefully curated to effectively communicate key messaging and align with your business vision, with longevity in mind to nurture long-term success.",
  },
  {
    number: "02",
    title: "Search Engine Optimisation",
    description:
      "Our bespoke and tailored SEO campaign strategies help businesses to generate quality traffic to their websites, increase brand awareness and visibility. From initial discussion and keyword research through to on-page/off-page implementation and reporting, we promise to deliver a professional and thorough service which is both measurable and effective for sustainable growth.",
  },
  {
    number: "03",
    title: "Social Media",
    description:
      "Our personalised social media campaigns help by both amplifying online presence and increasing effective engagement with prospective and existing audiences. The approach we have towards content creation and scheduling is fully strategic and calculated to generate sustainable growth through organic and/or paid strategies.",
  },
  {
    number: "04",
    title: "Web Design",
    description:
      "Our tailored and entirely bespoke Surrey web design and build services offer stunning and user-optimised sites, proven to drastically increase engagement and conversions. From the initial discussion stages through to presenting page concepts and then the build, our work centres around your audience and their needs to provide a personalised and enjoyable online experience for your customers.",
  },
  {
    number: "05",
    title: "Website Hosting",
    description:
      "Our secure, fast and reliable website hosting plans are perfect for any size business seeking a robust service. Your website will be protected with advanced security and constantly monitored to ensure 99.99% uptime and speed. We have a team of in-house developers on hand to ensure your site always remains optimised and managed so that you can just focus on driving the business forward.",
  },
  {
    number: "06",
    title: "Website Maintenance",
    description:
      "Our website maintenance packages ensure that your site stays updated and running properly without any bugs or issues. We take care of security checks, frequent backups and monitoring so you can have peace of mind that your website is functioning as it should be. Our in-house developers are proactive and reactant in their maintenance to make sure that you aren't left with a issue ridden site so that you can focus on the important things for your business.",
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
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
    <div
      ref={ref}
      className={`transition-all ease-out duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="border-t border-border pt-8">
        <span className="block font-display text-[120px] font-light leading-none text-muted-foreground/30">
          {service.number}
        </span>
        <h3 className="mt-4 mb-6 font-display text-3xl font-semibold leading-tight text-foreground lg:text-4xl">
          {service.title}
        </h3>
        <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="bg-background py-24 sm:py-32" data-scroll-section>
      <div className="container">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-20 lg:gap-y-24">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;