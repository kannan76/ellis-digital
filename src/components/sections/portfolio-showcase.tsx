"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type PortfolioItemData = {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
  title: string;
  category: string;
  width: number;
  height: number;
};

const portfolioItems: PortfolioItemData[] = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/Homepage-Portfolio-Image-01-16.png",
    alt: "Abstract purple and blue graphic",
    orientation: 'landscape',
    title: "Digital Branding",
    category: "Web / Branding",
    width: 1024,
    height: 576,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/thorns-black-w-background-chair-scaled-14.webp",
    alt: "Thorns brand identity on a modern chair",
    orientation: 'portrait',
    title: "Thorns Group",
    category: "Branding",
    width: 800,
    height: 1000,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/Homepage-Portfolio-Image-02-13.png",
    alt: "Laptop displaying a website design",
    orientation: 'landscape',
    title: "UX/UI Design",
    category: "Web Design",
    width: 1024,
    height: 768,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/Retail-Sign-Mockup-scaled-12.webp",
    alt: "Storefront sign mockup for a retail brand",
    orientation: 'portrait',
    title: "Retail Signage",
    category: "Graphic Design",
    width: 800,
    height: 1000,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/Mahindra-e1728575923781-scaled-15.webp",
    alt: "Mahindra Racing website on a laptop screen",
    orientation: 'landscape',
    title: "Mahindra Racing",
    category: "Web Development",
    width: 1024,
    height: 576,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/Homepage-Portfolio-Image-04-17.png",
    alt: "Close-up of a brochure with abstract design",
    orientation: 'portrait',
    title: "Print Design",
    category: "Graphic Design",
    width: 800,
    height: 1000,
  },
];

const columns = [
  [portfolioItems[0], portfolioItems[3]], // Landscape, Portrait
  [portfolioItems[1], portfolioItems[4]], // Portrait, Landscape
  [portfolioItems[2], portfolioItems[5]], // Landscape, Portrait
];

const PortfolioItem = ({ src, alt, title, category, width, height }: PortfolioItemData) => {
  return (
    <a href="#" className="group relative mb-8 block cursor-pointer overflow-hidden rounded-[1.5rem] will-change-transform">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-8">
        <h3 className="font-semibold text-2xl text-primary-white">{title}</h3>
        <p className="text-base text-medium-gray-light">{category}</p>
      </div>
    </a>
  );
};

interface PortfolioColumnProps {
  items: PortfolioItemData[];
  y: MotionValue<number>;
}

const PortfolioColumn = ({ items, y }: PortfolioColumnProps) => {
  return (
    <motion.div style={{ y }} className="flex flex-col">
      {items.map((item) => (
        <PortfolioItem key={item.src} {...item} />
      ))}
    </motion.div>
  );
};

const PortfolioShowcase = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-primary-black py-24 sm:py-32"
      data-scroll-section
    >
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <PortfolioColumn items={columns[0]} y={y1} />
          <PortfolioColumn items={columns[1]} y={y2} />
          <PortfolioColumn items={columns[2]} y={y3} />
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;