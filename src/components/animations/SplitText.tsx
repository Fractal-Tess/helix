'use client';

import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  splitType?: 'chars' | 'words';
  delay?: number;
  duration?: number;
  ease?: string;
}

const SplitText = ({
  text,
  className = '',
  splitType = 'chars',
  delay = 30,
  duration = 2,
  ease = 'elastic.out(0.5, 0.3)'
}: SplitTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const splitText = splitType === 'chars' 
    ? text.split('') 
    : text.split(' ');

  return (
    <span ref={ref} className={className}>
      {splitText.map((char, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: `all ${duration}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
            transitionDelay: `${index * delay}ms`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;