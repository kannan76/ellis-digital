import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-32 md:py-40 lg:py-48" data-scroll-section>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007CF0] via-[#00C6FF] to-[#0AFFEF] opacity-80"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="max-w-4xl text-4xl font-semibold !leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Ready to Boost Your Child’s Learning?
        </h2>
        <p className="mt-6 max-w-lg text-lg text-white/90 md:text-xl lg:text-2xl">
          Enquire now and help them achieve academic excellence!
        </p>
        <div className="mt-10">
          <Button
            asChild
            className="h-auto rounded-full bg-white px-10 py-5 text-base font-semibold text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:px-12 md:py-6 md:text-lg"
          >
            <Link href="/contact-us" className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
