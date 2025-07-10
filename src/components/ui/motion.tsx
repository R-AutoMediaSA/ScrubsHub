"use client";

import React, { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: 300 | 500 | 700 | 1000;
  distance?: number;
  id?: string;
}

/**
 * FadeIn component that uses CSS classes for animations
 */
export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
  duration = 500,
  id,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Use for...of instead of forEach for better performance
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // Add small delay for sequential animations
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      }
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  // Map direction to CSS class
  const directionClass = direction !== "none"
    ? `animate-fade-${direction}`
    : "";

  // Map duration to CSS class
  const durationClass = `duration-${duration}`;

  return (
    <div
      ref={domRef}
      id={id}
      className={cn(
        className,
        "animate-fade",
        directionClass,
        durationClass,
        isVisible && "visible"
      )}
    >
      {children}
    </div>
  );
}

interface StaggeredChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: 300 | 500 | 700 | 1000;
}

/**
 * StaggeredChildren component that animates children sequentially
 */
export function StaggeredChildren({
  children,
  staggerDelay = 100,
  initialDelay = 0,
  className = "",
  direction = "up",
  duration = 500,
}: StaggeredChildrenProps) {
  const childArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, index) => {
        // Use stable keys that can be predicted on both server and client
        const key = `staggered-${index}`;
        const delay = initialDelay + (index * staggerDelay);

        return (
          <FadeIn
            key={key}
            delay={delay}
            direction={direction}
            duration={duration}
          >
            {child}
          </FadeIn>
        );
      })}
    </div>
  );
}
