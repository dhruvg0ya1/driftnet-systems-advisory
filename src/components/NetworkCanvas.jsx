import React, { useEffect, useRef } from 'react';

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = { x: -1000, y: -1000, targetLocked: false };

    // Radar sweep angle
    let radarAngle = 0;

    // Tactical square nodes
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes = [];

    const hexChars = '0123456789ABCDEF';
    const randomHex = () => '0x' + hexChars[Math.floor(Math.random() * 16)] + hexChars[Math.floor(Math.random() * 16)];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() > 0.8 ? 5 : 3, // Sharp square dimensions
        label: randomHex(),
        isAnomaly: Math.random() < 0.15,
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.03
      });
    }

    // Packet pulses
    const pulses = [];
    const maxPulses = 10;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.targetLocked = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.targetLocked = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Radar rotation
      radarAngle += 0.008;

      // Draw subtle tactical coordinate grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Spawn random packet signals
      if (pulses.length < maxPulses && Math.random() < 0.07) {
        const i = Math.floor(Math.random() * nodes.length);
        const j = Math.floor(Math.random() * nodes.length);
        if (i !== j) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            pulses.push({
              from: nodes[i],
              to: nodes[j],
              progress: 0,
              speed: 0.02 + Math.random() * 0.03,
              color: nodes[i].isAnomaly ? '#f59e0b' : '#00f0ff'
            });
          }
        }
      }

      // Draw node connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nodes[i].isAnomaly || nodes[j].isAnomaly
              ? `rgba(245, 158, 11, ${alpha})`
              : `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Animate packet pulses (sharp diamond shape)
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const px = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
        const py = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;

        ctx.fillStyle = pulse.color;
        // Sharp square diamond
        ctx.fillRect(px - 2, py - 2, 4, 4);
      }

      // Draw nodes (sharp squares) and labels
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node square
        ctx.fillStyle = node.isAnomaly ? '#f59e0b' : '#00f0ff';
        ctx.fillRect(node.x - node.size / 2, node.y - node.size / 2, node.size, node.size);

        // Small hex label
        if (node.size > 3) {
          ctx.font = '9px monospace';
          ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
          ctx.fillText(node.label, node.x + 6, node.y + 3);
        }
      }

      // Interactive Cursor Tactical Reticle
      if (mouse.targetLocked && mouse.x > 0 && mouse.y > 0) {
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 1;

        // Crosshair lines
        ctx.beginPath();
        ctx.moveTo(mouse.x - 16, mouse.y);
        ctx.lineTo(mouse.x + 16, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 16);
        ctx.lineTo(mouse.x, mouse.y + 16);
        ctx.stroke();

        // Corner brackets around cursor
        const bSize = 10;
        ctx.strokeRect(mouse.x - bSize, mouse.y - bSize, bSize * 2, bSize * 2);

        // Cursor coordinates
        ctx.font = '10px monospace';
        ctx.fillStyle = '#00f0ff';
        ctx.fillText(`X:${Math.round(mouse.x)} Y:${Math.round(mouse.y)} [TRACK]`, mouse.x + 14, mouse.y - 12);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
