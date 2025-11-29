"use client";

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const TeamPhotoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section 
      ref={containerRef}
      className="relative h-[70vh] w-full overflow-hidden"
      aria-label="The Ellis Digital team"
      data-scroll-section
    >
      <div className="absolute inset-0">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/Ellis-Digital-Dec-2024-117-scaled-25.jpg"
            alt="The Ellis Digital team working in their office environment."
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            quality={80}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPhotoSection;