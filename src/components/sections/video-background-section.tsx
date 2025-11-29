"use client";

import React from "react";

const VideoBackgroundSection = () => {
  const videoUrl =
    "https://ellis.digital/wp-content/uploads/2024/10/2024-01-2318-20-25-ezgif.com-video-cutter-online-video-cutter.com1_.mp4";

  return (
    <section
      id="banner"
      className="relative flex items-center min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-display text-[clamp(3.5rem,10vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.02em] text-white">
            <div>Digital</div>
            <div>Brilliance.</div>
          </h1>
          <p className="mt-8 font-body text-base tracking-wide text-white/90 sm:text-lg">
            Websites • Digital Marketing • Design
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoBackgroundSection;