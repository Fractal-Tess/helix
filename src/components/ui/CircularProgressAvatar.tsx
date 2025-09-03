"use client";

import { useEffect, useState, useRef } from "react";

type CircularProgressAvatarProps = {
  src?: string;
  fallback?: string;
  size?: number; // px
  progress: number; // 0..1
  stroke?: number; // ring thickness in px
  level?: number;
  showLevel?: boolean;
  className?: string;
};

export function CircularProgressAvatar({
  src,
  fallback,
  progress,
  size = 40,
  stroke = 3,
  level,
  showLevel = false,
  className = "",
}: CircularProgressAvatarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const animationRef = useRef<number>();

  // Animate progress changes with cubic out easing (matching Svelte implementation)
  useEffect(() => {
    const targetProgress = Math.max(0, Math.min(1, progress));
    const duration = 600; // ms
    const startTime = Date.now();
    const startProgress = animatedProgress;
    const progressDiff = targetProgress - startProgress;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const normalizedTime = Math.min(elapsed / duration, 1);
      
      // Cubic out easing (matching Svelte cubicOut)
      const eased = 1 - Math.pow(1 - normalizedTime, 3);
      const currentProgress = startProgress + progressDiff * eased;
      
      setAnimatedProgress(currentProgress);
      
      if (normalizedTime < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [progress]); // Remove animatedProgress from deps to prevent loop

  // Calculations matching Svelte implementation exactly
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = `${circumference} ${circumference}`;
  const offset = circumference * (1 - Math.max(0, Math.min(1, animatedProgress)));

  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Avatar Image */}
      <img
        src={src || '/images/avatar.png'}
        alt="avatar"
        width={size}
        height={size}
        className="rounded-full object-cover"
        loading="lazy"
        decoding="async"
      />
      
      {/* Progress ring SVG */}
      <svg
        className="absolute inset-0 z-10"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--muted)"
          strokeWidth={stroke}
        />
        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--primary)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={dash}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      
      {/* Level badge */}
      {showLevel && level && (
        <div 
          className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center min-w-[20px] h-5 px-1"
          style={{ fontSize: size * 0.25 }}
        >
          {level}
        </div>
      )}
    </div>
  );
}