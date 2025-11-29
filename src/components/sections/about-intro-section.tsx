import React from 'react';

const AboutIntroSection = () => {
  return (
    <section className="bg-background py-24 md:py-32" data-scroll-section>
      <div className="container">
        <div
          className="mx-auto max-w-4xl text-center"
          data-scroll
        >
          <h2 className="text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-foreground md:text-5xl lg:text-[56px]">
            Quality Education for a Brighter Future
          </h2>
          <p className="mt-8 text-lg leading-[1.7] text-muted-foreground">
            At Saravanapriyan Tuition Centre, Ramanathapuram, we are committed to providing
            strong academic support for school students. With a focus on concept clarity,
            regular practice, and personalized guidance, we help students build confidence
            and achieve excellent results in their studies.
            <br /><br />
            Our experienced teachers ensure every student receives individual attention,
            doubt clearing, and a motivating learning environment. We aim to support
            parents in shaping their children’s future through education that truly matters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
