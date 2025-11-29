"use client";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import type LocomotiveScroll from "locomotive-scroll";

type SmoothScrollContainerProps = {
  children: ReactNode;
};

const SmoothScrollContainer = ({ children }: SmoothScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  // Wait for DOM to be fully ready
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isReady) return;

    let resizeObserver: ResizeObserver;
    let scroll: LocomotiveScroll;
    let isInitialized = false;

    const initScroll = async () => {
      try {
        const locomotiveModule = await import("locomotive-scroll");
        
        if (!containerRef.current || isInitialized) return;

        const LocomotiveScroll = locomotiveModule.default;
        
        // Ensure all elements with data-scroll attributes are in the DOM
        const scrollElements = containerRef.current.querySelectorAll('[data-scroll]');
        if (scrollElements.length === 0) {
          // If no scroll elements yet, wait a bit more
          setTimeout(initScroll, 100);
          return;
        }

        scroll = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          lerp: 0.08,
          multiplier: 1.0,
          smartphone: {
            smooth: false,
          },
          tablet: {
            smooth: false,
          },
        });

        isInitialized = true;
        scrollRef.current = scroll;

        // Update on resize
        resizeObserver = new ResizeObserver(() => {
          if (scroll && isInitialized) {
            scroll.update();
          }
        });
        
        if (containerRef.current) {
          resizeObserver.observe(containerRef.current);
        }
      } catch (error) {
        console.error("Locomotive Scroll initialization error:", error);
      }
    };

    initScroll();

    return () => {
      isInitialized = false;
      resizeObserver?.disconnect();
      if (scroll) {
        try {
          scroll.destroy();
        } catch (error) {
          console.error("Scroll destroy error:", error);
        }
      }
      scrollRef.current = null;
    };
  }, [isReady]);

  useEffect(() => {
    if (scrollRef.current) {
      const timer = setTimeout(() => {
        try {
          scrollRef.current?.update();
          scrollRef.current?.scrollTo(0, { duration: 0, disableLerp: true });
        } catch (error) {
          console.error("Scroll update error:", error);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <div ref={containerRef} data-scroll-container id="website-scroll-container">
      {children}
    </div>
  );
};

export default SmoothScrollContainer;