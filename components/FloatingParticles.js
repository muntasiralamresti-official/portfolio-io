"use client";

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  top: `${(i * 13) % 100}%`,
  left: `${(i * 7) % 100}%`,
}));

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
          style={{
            top: particle.top,
            left: particle.left,
          }}
        />
      ))}
    </div>
  );
}