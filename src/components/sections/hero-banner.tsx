import React from 'react';

const HeroBanner = () => {
  return (
    <section
      id="banner"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background"
      data-scroll-section
    >
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        data-scroll
        data-scroll-speed="2"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://ellis.digital/wp-content/uploads/2024/11/ellis-digital-moving-homepage-picture-1.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div
        className="relative z-10 text-center text-foreground px-6"
        data-scroll
        data-scroll-speed="0.5"
      >
        <h1 className="font-display font-bold text-white leading-[1.1] tracking-[-0.02em] text-[clamp(3.5rem,12vw,9.375rem)]">
          <div>Saravanapriyan</div>
          <div>Tuition Centre</div>
        </h1>
        <p className="font-body text-muted-foreground text-[clamp(0.875rem,2vw,1.125rem)] mt-6 tracking-[0.2em] uppercase">
          Ramanathapuram • Academic Excellence • Better Results
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
