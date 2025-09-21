'use client';

import { useEffect, useRef } from 'react';

interface PlasmaWaveV2Props {
  yOffset?: number;
  xOffset?: number;
  rotationDeg?: number;
}

const PlasmaWaveV2 = ({ yOffset = 0, xOffset = 0, rotationDeg = 0 }: PlasmaWaveV2Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      const { width, height } = canvas;
      
      ctx.clearRect(0, 0, width, height);
      
      // Create plasma wave effect
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      
      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const index = (y * width + x) * 4;
          
          // Plasma calculation with wave patterns
          const value1 = Math.sin(x * 0.01 + time * 0.002);
          const value2 = Math.sin(y * 0.01 + time * 0.003);
          const value3 = Math.sin((x + y) * 0.01 + time * 0.001);
          const value4 = Math.sin(Math.sqrt(x * x + y * y) * 0.01 + time * 0.004);
          
          const plasma = (value1 + value2 + value3 + value4) / 4;
          
          // Color mapping with purple/blue theme
          const red = Math.floor(128 + 127 * Math.sin(plasma * Math.PI + time * 0.001));
          const green = Math.floor(64 + 63 * Math.sin(plasma * Math.PI + 2 + time * 0.002));
          const blue = Math.floor(192 + 63 * Math.sin(plasma * Math.PI + 4 + time * 0.003));
          
          // Apply to current pixel and adjacent pixels for smoother effect
          for (let dx = 0; dx < 2 && x + dx < width; dx++) {
            for (let dy = 0; dy < 2 && y + dy < height; dy++) {
              const pixelIndex = ((y + dy) * width + (x + dx)) * 4;
              if (pixelIndex < data.length) {
                data[pixelIndex] = red;
                data[pixelIndex + 1] = green;
                data[pixelIndex + 2] = blue;
                data[pixelIndex + 3] = 80; // Alpha for transparency
              }
            }
          }
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      time++;
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="plasma-wave-canvas"
      style={{
        transform: `translate(${xOffset}px, ${yOffset}px) rotate(${rotationDeg}deg)`,
      }}
    />
  );
};

export default PlasmaWaveV2;