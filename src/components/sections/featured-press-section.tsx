import Image from 'next/image';

const featuredAchievements = [
  {
    src: '/images/top-scorer-1.png', // Replace with real student achievement image
    alt: 'Top Scorer Award',
    width: 300,
    height: 200,
  },
  {
    src: '/images/exam-excellence-1.png', // Replace with real certificate/result image
    alt: 'Board Exam Excellence',
    width: 300,
    height: 200,
  },
];

const FeaturedPressSection = () => {
  return (
    <section className="bg-primary-black py-16" data-scroll-section>
      <div className="container">
        <div className="flex flex-col items-center">
          <h3 className="mb-10 text-center text-sm font-medium uppercase tracking-[0.08em] text-muted-foreground">
            OUR STUDENTS HAVE ACHIEVED:
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 md:gap-x-24">
            {featuredAchievements.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-16 w-auto object-contain md:h-20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPressSection;
