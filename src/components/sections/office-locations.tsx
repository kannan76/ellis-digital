import Image from 'next/image';
import React from 'react';

const OfficeLocations = () => {
  return (
    <div className="bg-black py-20 lg:py-[130px]" data-scroll-section>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
          <div className="relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[24px] p-8 md:p-12">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/edited_homepage_image_1-scaled-27.webp"
              alt="Background graphic for Surrey office location"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-white">
              <h3 className="mb-5 font-inter text-[39px] font-semibold leading-[1.2]">
                Surrey
              </h3>
              <address className="font-inter text-lg leading-[1.7] text-neutral-300 not-italic">
                The Tile Kiln<br />
                Tilehouse Farm<br />
                Guildford<br />
                United Kingdom<br />
                GU4 8AE
              </address>
            </div>
          </div>

          <div className="relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[24px] p-8 md:p-12">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/75518b30-8e09-415f-8236-8df681533f60-ellis-digital/assets/images/group_266-scaled-26.webp"
              alt="Background graphic for London office location"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-white">
              <h3 className="mb-5 font-inter text-[39px] font-semibold leading-[1.2]">
                London
              </h3>
              <address className="font-inter text-lg leading-[1.7] text-neutral-300 not-italic">
                72-74 Dean Street<br />
                Soho<br />
                London<br />
                United Kingdom<br />
                W1D 3SG
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;