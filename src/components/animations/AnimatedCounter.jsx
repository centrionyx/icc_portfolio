"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

/**
 * AnimatedCounter component counts from 0 up to a target number
 * when the element comes into view on screen.
 * Supports suffix/prefix characters (e.g. "+", "%", "M+", "Lakh").
 */
export default function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView || value === undefined || value === null) return;

    const strVal = String(value);
    // Parse target number and extract non-numeric prefix/suffix
    const match = strVal.match(/^([^\d\.]*)([\d\.]+)(.*)$/);

    if (!match) {
      setDisplayValue(strVal);
      return;
    }

    const prefix = match[1] || "";
    const targetNum = parseFloat(match[2]);
    const suffix = match[3] || "";
    const isFloat = match[2].includes(".");
    const decimals = isFloat ? (match[2].split(".")[1]?.length || 1) : 0;

    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = easeProgress * targetNum;

      const formattedNum = isFloat
        ? currentNum.toFixed(decimals)
        : Math.floor(currentNum).toLocaleString();

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        const finalNum = isFloat
          ? targetNum.toFixed(decimals)
          : targetNum.toLocaleString();
        setDisplayValue(`${prefix}${finalNum}${suffix}`);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}
