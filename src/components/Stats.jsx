import React from "react";

function Stats() {
  const stats = [
    { label: "Projects", value: "3,048+" },
    { label: "Clients", value: "24+" },
    { label: "Avg. NPS", value: "92" },
    { label: "Years", value: "7+" },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm text-blue-200/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
