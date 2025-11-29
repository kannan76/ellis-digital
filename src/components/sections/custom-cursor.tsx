"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isClient, setIsClient] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 };
  const smoothX = useSpring(position.x, springConfig);
  const smoothY = useSpring(position.y, springConfig);
  
  useEffect(() => {
    smoothX.set(position.x);
    smoothY.set(position.y);
  }, [position, smoothX, smoothY]);

  useEffect(() => {
    if (!isClient) return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.style.cursor = 'auto'; // Ensure default cursor is visible on touch devices
      return;
    }

    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"]'
    );

    const handleMouseEnterInteractive = () => setIsHovering(true);
    const handleMouseLeaveInteractive = () => setIsHovering(false);

    interactiveElements.forEach((el) => {
      (el as HTMLElement).style.cursor = 'none';
      el.addEventListener("mouseenter", handleMouseEnterInteractive);
      el.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);

      interactiveElements.forEach((el) => {
        try {
          (el as HTMLElement).style.cursor = 'auto';
          el.removeEventListener("mouseenter", handleMouseEnterInteractive);
          el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
        } catch (error) {
          // Element might be gone
        }
      });
    };
  }, [isClient, isVisible]);

  if (!isClient || ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }
  
  const scale = isPressed ? 0.8 : isHovering ? 2.0 : 1.0;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2, ease: "linear" }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2"
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <svg width="26.5" height="26.5" viewBox="0 0 26.5 26.5" fill="none">
          <circle
            cx="13.25"
            cy="13.25"
            r="12.75"
            strokeWidth="1"
            className={`transition-colors duration-200 ease-in-out ${
              isHovering ? "stroke-accent-cyan" : "stroke-white"
            }`}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;