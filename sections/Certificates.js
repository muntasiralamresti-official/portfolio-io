export default function Certificates() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold gradient-text mb-12">
          Certificates
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="glass rounded-2xl p-8 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                Digital Marketing Certificate
              </h3>

              <p className="text-gray-400">
                Professional certification achievement.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}