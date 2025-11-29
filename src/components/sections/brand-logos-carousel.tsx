import Image from "next/image";

// Temporary placeholder achievement/logo images — replace once you have real assets
const achievementsRow1 = [
  { src: "/images/achievement1.png", alt: "Student Achievement 1", width: 200, height: 120 },
  { src: "/images/achievement2.png", alt: "Student Achievement 2", width: 200, height: 120 },
  { src: "/images/achievement3.png", alt: "Student Achievement 3", width: 200, height: 120 },
  { src: "/images/achievement4.png", alt: "Student Achievement 4", width: 200, height: 120 },
  { src: "/images/achievement5.png", alt: "Student Achievement 5", width: 200, height: 120 },
];

const achievementsRow2 = [
  { src: "/images/achievement6.png", alt: "Student Achievement 6", width: 200, height: 120 },
  { src: "/images/achievement7.png", alt: "Student Achievement 7", width: 200, height: 120 },
  { src: "/images/achievement8.png", alt: "Student Achievement 8", width: 200, height: 120 },
  { src: "/images/achievement9.png", alt: "Student Achievement 9", width: 200, height: 120 },
  { src: "/images/achievement10.png", alt: "Student Achievement 10", width: 200, height: 120 },
];

const extendedRow1 = [...achievementsRow1, ...achievementsRow1, ...achievementsRow1];
const extendedRow2 = [...achievementsRow2, ...achievementsRow2, ...achievementsRow2];

const AchievementCard = ({ item }: { item: typeof achievementsRow1[0] }) => (
  <div className="flex-shrink-0 mx-3 w-[220px] h-[130px] flex items-center justify-center bg-[rgba(255,255,255,0.05)] rounded-[20px] p-4 transition-transform duration-300 hover:scale-105">
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      className="max-w-full max-h-full object-contain"
    />
  </div>
);

const AchievementsCarousel = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll-ltr {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-rtl {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
          .animate-scroll-ltr {
            animation: scroll-ltr 60s linear infinite;
          }
          .animate-scroll-rtl {
            animation: scroll-rtl 60s linear infinite;
          }
        `}
      </style>

      <section className="bg-black py-16 md:py-24" data-scroll-section>
        <h2 className="text-center text-3xl font-semibold text-white mb-12 px-6">
          Our Students’ Achievements & Academic Success
        </h2>

        <div className="overflow-hidden space-y-6">
          <div className="flex animate-scroll-ltr">
            {extendedRow1.map((item, index) => (
              <AchievementCard key={`r1-${index}`} item={item} />
            ))}
          </div>
          <div className="flex animate-scroll-rtl">
            {extendedRow2.map((item, index) => (
              <AchievementCard key={`r2-${index}`} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsCarousel;
