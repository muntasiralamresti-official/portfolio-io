const particles = Array.from(
  { length: 30 },
  (_, i) => ({
    id: i,

    top: `${(i * 13) % 100}%`,

    left: `${(i * 7) % 100}%`,
  })
);

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {particles.map((particle) => (

        <span
          key={particle.id}
          className="
            absolute
            rounded-full
            bg-cyan-400
            animate-pulse
          "

          style={{
            top: particle.top,

            left: particle.left,

            width: "3px",

            height: "3px",

            opacity: 0.7,

            boxShadow:
              "0 0 10px rgba(34,211,238,0.9)",
          }}
        />

      ))}

    </div>
  );
}