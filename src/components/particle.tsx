"use client";

import React, { useEffect, useRef, Suspense } from "react";

interface Particle {
  size: number;
  position: { x: number; y: number };
  offset: { x: number; y: number };
  shift: { x: number; y: number };
  speed: number;
  targetSize: number;
  fillColor: string;
  orbit: number;
}

export default function Particle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return; // Check if canvas is not null

    let SCREEN_WIDTH = window.innerWidth;
    let SCREEN_HEIGHT = window.innerHeight;

    let RADIUS = 200;
    let RADIUS_SCALE = 2;
    const RADIUS_SCALE_MIN = 1;
    // const RADIUS_SCALE_MAX = 1.5;
    const RADIUS_SCALE_MAX = 10;

    // const QUANTITY = 25;
    const QUANTITY = 100;

    let mouseX = SCREEN_WIDTH * 0.5;
    let mouseY = SCREEN_HEIGHT * 0.5;
    let mouseIsDown = false;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return; // Additional check for context

    let particles: Particle[] = [];
    function createParticles() {
      particles = [];

      for (let i = 0; i < QUANTITY; i++) {
        const particle = {
          size: 1,
          position: { x: mouseX, y: mouseY },
          offset: { x: 0, y: 0 },
          shift: { x: mouseX, y: mouseY },
          speed: 0.01 + Math.random() * 0.04,
          targetSize: 1,
          fillColor:
            "#" + ((Math.random() * 0x404040 + 0xaaaaaa) | 0).toString(16),
          orbit: RADIUS * 0.5 + RADIUS * 0.5 * Math.random(),
        };

        particles.push(particle);
      }
    }

    function resizeCanvas() {
      SCREEN_WIDTH = window.innerWidth;
      SCREEN_HEIGHT = window.innerHeight;

      canvas.width = SCREEN_WIDTH;
      canvas.height = SCREEN_HEIGHT;
    }

    function loop() {
      if (!context) return; // Additional check for context
      if (mouseIsDown) {
        RADIUS_SCALE += (RADIUS_SCALE_MAX - RADIUS_SCALE) * 0.02;
      } else {
        RADIUS_SCALE -= (RADIUS_SCALE - RADIUS_SCALE_MIN) * 0.02;
      }

      RADIUS_SCALE = Math.min(RADIUS_SCALE, RADIUS_SCALE_MAX);

      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        const lp = { x: particle.position.x, y: particle.position.y };

        particle.offset.x += particle.speed;
        particle.offset.y += particle.speed;

        particle.shift.x += (mouseX - particle.shift.x) * particle.speed;
        particle.shift.y += (mouseY - particle.shift.y) * particle.speed;

        particle.position.x =
          particle.shift.x +
          Math.cos(i + particle.offset.x) * (particle.orbit * RADIUS_SCALE);
        particle.position.y =
          particle.shift.y +
          Math.sin(i + particle.offset.y) * (particle.orbit * RADIUS_SCALE);

        particle.position.x = Math.max(
          Math.min(particle.position.x, SCREEN_WIDTH),
          0,
        );
        particle.position.y = Math.max(
          Math.min(particle.position.y, SCREEN_HEIGHT),
          0,
        );

        particle.size += (particle.targetSize - particle.size) * 0.05;

        if (Math.round(particle.size) === Math.round(particle.targetSize)) {
          particle.targetSize = 1 + Math.random() * 7;
        }

        context.beginPath();
        context.fillStyle = particle.fillColor;
        context.strokeStyle = particle.fillColor;
        context.lineWidth = particle.size;
        context.moveTo(lp.x, lp.y);
        context.lineTo(particle.position.x, particle.position.y);
        context.stroke();
        context.arc(
          particle.position.x,
          particle.position.y,
          particle.size / 2,
          0,
          Math.PI * 2,
          true,
        );
        context.fill();
      }
    }

    // Event Listeners
    function handleMouseMove(event: any) {
      mouseX = event.clientX - (window.innerWidth - SCREEN_WIDTH) * 0.5;
      mouseY = event.clientY - (window.innerHeight - SCREEN_HEIGHT) * 0.5;
    }

    function handleMouseDown() {
      mouseIsDown = true;
    }

    function handleMouseUp() {
      mouseIsDown = false;
    }

    function handleTouchStart(event: any) {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX =
          event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * 0.5;
        mouseY =
          event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * 0.5;
      }
    }

    function handleTouchMove(event: any) {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX =
          event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * 0.5;
        mouseY =
          event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * 0.5;
      }
    }

    window.addEventListener("resize", resizeCanvas, false);
    window.addEventListener("mousemove", handleMouseMove, false);
    window.addEventListener("mousedown", handleMouseDown, false);
    window.addEventListener("mouseup", handleMouseUp, false);
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);

    createParticles();
    resizeCanvas();
    const intervalId = setInterval(loop, 1000 / 60);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <canvas id="world" className="absolute" ref={canvasRef}></canvas>
      <div className="flex h-full flex-col items-center justify-center">
        <h3 className="font-inklipquid z-[1] mb-0 scale-[1] text-white transition-all md:mb-8 md:scale-[2] lg:mb-12 xl:mb-16">
          STUDIO
        </h3>
        <div className="font-cwdangam z-[1] scale-[1.3] text-5xl tracking-[-2px] text-white transition-all ease-linear md:scale-[2] lg:scale-[3] xl:scale-[4]">
          <span className="font-cwdangam text-[#87c7d9]">N</span>ANG
          <span className="font-cwdangam text-[#feeffa]">M</span>AN
        </div>
      </div>
    </>
  );
}
