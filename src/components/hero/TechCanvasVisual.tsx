import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity, ShieldCheck, Zap } from 'lucide-react';

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  color: string;
  pulsePhase: number;
}

interface DataPacket {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export const TechCanvasVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize 3D neural / mesh nodes with Amber Gold palette
    const nodeCount = 42;
    const nodes: Node[] = [];
    const colors = ['#fffbeb', '#fef3c7', '#fde68a', '#fbbf24', '#f59e0b', '#d97706', '#b45309'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * (width * 0.85),
        y: (Math.random() - 0.5) * (height * 0.85),
        z: (Math.random() - 0.5) * 400,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.4,
        baseRadius: Math.random() * 2.5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Data packets traveling along edges
    const packets: DataPacket[] = [];
    const maxPackets = 12;

    const addPacket = () => {
      if (packets.length < maxPackets && nodes.length > 2) {
        const fromIndex = Math.floor(Math.random() * nodes.length);
        let toIndex = Math.floor(Math.random() * nodes.length);
        while (toIndex === fromIndex) {
          toIndex = Math.floor(Math.random() * nodes.length);
        }
        packets.push({
          fromIndex,
          toIndex,
          progress: 0,
          speed: Math.random() * 0.012 + 0.008,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    let rotationAngleY = 0;
    const fov = 380;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotationAngleY += 0.003;
      const cosY = Math.cos(rotationAngleY);
      const sinY = Math.sin(rotationAngleY);

      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D nodes into 2D screen coordinates
      const projectedNodes = nodes.map((node) => {
        // Subtle drift physics
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        const boundX = width * 0.45;
        const boundY = height * 0.45;
        const boundZ = 220;

        if (Math.abs(node.x) > boundX) node.vx *= -1;
        if (Math.abs(node.y) > boundY) node.vy *= -1;
        if (Math.abs(node.z) > boundZ) node.vz *= -1;

        // Mouse influence
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - (centerX + node.x);
          const dy = mouseRef.current.y - (centerY + node.y);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 && dist > 1) {
            node.x += (dx / dist) * 0.8;
            node.y += (dy / dist) * 0.8;
          }
        }

        // 3D rotation around Y axis
        const rotX = node.x * cosY - node.z * sinY;
        const rotZ = node.z * cosY + node.x * sinY;

        const scale = fov / (fov + rotZ + 250);
        const screenX = centerX + rotX * scale;
        const screenY = centerY + node.y * scale;
        const alpha = Math.max(0.15, Math.min(1, (scale - 0.4) * 1.5));

        return {
          screenX,
          screenY,
          scale,
          alpha,
          color: node.color,
          radius: Math.max(1, node.baseRadius * scale),
          pulsePhase: (node.pulsePhase += 0.04),
        };
      });

      // Draw connections between close nodes
      const maxDistance = 110;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.screenX - p2.screenX;
          const dy = p1.screenY - p2.screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const edgeAlpha = (1 - dist / maxDistance) * 0.3 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 158, 11, ${edgeAlpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.screenX, p1.screenY);
            ctx.lineTo(p2.screenX, p2.screenY);
            ctx.stroke();
          }
        }
      }

      // Draw data packets traveling along network lines
      if (Math.random() < 0.05) addPacket();

      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k];
        p.progress += p.speed;
        if (p.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const start = projectedNodes[p.fromIndex];
        const target = projectedNodes[p.toIndex];
        if (!start || !target) continue;

        const currentX = start.screenX + (target.screenX - start.screenX) * p.progress;
        const currentY = start.screenY + (target.screenY - start.screenY) * p.progress;

        ctx.beginPath();
        ctx.fillStyle = '#fbbf24';
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 8;
        ctx.arc(currentX, currentY, 2.0, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw nodes
      projectedNodes.forEach((node) => {
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        const r = node.radius + pulse * 1.2;

        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.screenX,
          node.screenY,
          0,
          node.screenX,
          node.screenY,
          r * 3.5
        );
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.globalAlpha = node.alpha * 0.45;
        ctx.arc(node.screenX, node.screenY, r * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Solid core
        ctx.beginPath();
        ctx.fillStyle = node.color;
        ctx.globalAlpha = Math.min(1, node.alpha + 0.2);
        ctx.arc(node.screenX, node.screenY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[480px] lg:h-[560px] flex items-center justify-center select-none"
    >
      {/* Ambient background blur orbs */}
      <div className="absolute w-72 h-72 rounded-full bg-amber-500/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-amber-700/[0.04] blur-[100px] -bottom-10 -right-10 pointer-events-none" />

      {/* Futuristic Concentric Orbit Rings */}
      <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-amber-500/15 pointer-events-none animate-[spin_60s_linear_infinite]" />
      <div className="absolute w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] rounded-full border border-amber-700/20 border-dashed pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />

      {/* HTML5 Canvas with 3D nodes and data streams */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 cursor-crosshair"
      />

      {/* Floating Micro UI Cards */}
      {/* Card 1: AI Model Active */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute top-6 -left-2 sm:left-4 z-20 bg-[#0a0f1d]/90 backdrop-blur-xl px-3.5 py-2.5 rounded-xl border border-amber-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.7),0_0_20px_rgba(245,158,11,0.08)] flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/25">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-amber-400/80 font-mono font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            AI Architecture
          </div>
          <div className="text-xs font-semibold text-slate-100">Neural Pipeline Active</div>
        </div>
      </motion.div>

      {/* Card 2: Cloud Telemetry */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 right-2 sm:right-6 z-20 bg-[#0a0f1d]/90 backdrop-blur-xl px-3.5 py-2.5 rounded-xl border border-amber-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.7),0_0_20px_rgba(245,158,11,0.08)] flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/25">
          <Activity className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-amber-500/70 font-mono font-semibold">
            System Telemetry
          </div>
          <div className="text-xs font-semibold text-slate-100 flex items-center gap-2">
            <span>Latency &lt; 15ms</span>
            <span className="text-amber-400 text-[10px] font-mono">● 99.99%</span>
          </div>
        </div>
      </motion.div>

      {/* Card 3: Enterprise Security */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute -bottom-2 left-6 sm:left-12 z-20 bg-amber-500/[0.06] backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/20 flex items-center gap-2 text-xs text-amber-300/80"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
        <span className="font-mono text-[11px]">Zero-Trust Security Matrix</span>
      </motion.div>
    </div>
  );
};
