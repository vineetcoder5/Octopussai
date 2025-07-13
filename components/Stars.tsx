'use client';

import { useEffect, useRef } from 'react';

const Stars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Using let for stars since it's reassigned later
    let stars: Star[] = [];
    // Using const since we only modify the array, not reassign it
    const shootingStars: ShootingStar[] = [];
    let animationFrameId: number;

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.6;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    class ShootingStar {
      x: number;
      y: number;
      len: number;
      angle: number;
      speed: number;
      opacity: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height * 0.5;
        this.len = Math.random() * 80 + 10;
        this.angle = Math.PI * 0.25;
        this.speed = Math.random() * 8 + 5;
        this.opacity = 1;
      }

      update() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.opacity -= 0.015;
      }

      draw() {
        if (!ctx || this.opacity <= 0) return;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.len * Math.cos(this.angle), this.y - this.len * Math.sin(this.angle));
        ctx.lineWidth = 5;
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.stroke();
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 2000);
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star(canvas.width, canvas.height));
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(10, 10, 15, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => star.draw());

      shootingStars.forEach((star, index) => {
        star.update();
        star.draw();
        if (star.opacity <= 0) {
          shootingStars.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const createShootingStar = () => {
        if(canvas) {
            shootingStars.push(new ShootingStar(canvas.width, canvas.height));
        }
        setTimeout(createShootingStar, Math.random() * 4000 + 2000);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    draw();
    createShootingStar();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
    />
  );
};

export default Stars;