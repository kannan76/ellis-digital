import Image from 'next/image';

const AwardsShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32" data-scroll-section>
      
      {/* Decorative Background Elements (unchanged) */}
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/layer_0-20.webp"
        alt="Decorative graphic element"
        width={500}
        height={500}
        className="absolute left-0 top-0 -z-10 h-auto w-auto opacity-10 animate-[spin_25s_linear_infinite]"
        unoptimized
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/layer_1-21.webp"
        alt="Decorative graphic element"
        width={600}
        height={600}
        className="absolute right-0 top-1/4 -z-10 h-auto w-auto opacity-10 animate-[spin_30s_linear_infinite_reverse]"
        unoptimized
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/layer_3-22.webp"
        alt="Decorative graphic element"
        width={400}
        height={400}
        className="absolute left-1/4 bottom-0 -z-10 h-auto w-auto opacity-15 animate-[spin_35s_linear_infinite]"
        unoptimized
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/layer_4-23.webp"
        alt="Decorative graphic element"
        width={700}
        height={700}
        className="absolute -right-1/4 bottom-1/4 -z-10 h-auto w-auto opacity-5 animate-[spin_40s_linear_infinite_reverse]"
        unoptimized
      />

      <div className="container">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">
          
          {/* Tuition Centre Content */}
          <div className="text-left">
            <h2 className="mb-6 text-4xl font-semibold text-primary-white sm:text-5xl" style={{ lineHeight: 1.2 }}>
              Proud Track Record of Student Success
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Over the years, students from Saravanapriyan Tuition Centre have consistently
              achieved excellent marks in board exams and school assessments. With focused
              teaching methods, regular tests, and personal attention, we ensure every child
              improves academically and builds confidence in their studies.
              <br /><br />
              We celebrate the achievements of our students and continue to guide them toward
              a brighter future through strong learning support.
            </p>
          </div>

          {/* Placeholder for Achievements / Top Scorers */}
          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/images/student-achievements-placeholder.png"
              alt="Top scores and student achievements"
              width={550}
              height={550}
              className="h-auto w-full max-w-md lg:max-w-full"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsShowcase;
