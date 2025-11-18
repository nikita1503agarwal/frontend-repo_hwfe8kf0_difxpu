import React from "react";

const services = [
  {
    title: "Brand Identity",
    desc: "Distinctive logos, typography, color systems and full brand kits that scale.",
  },
  {
    title: "Web Design & Dev",
    desc: "Fast, responsive websites designed to convert and optimized for SEO.",
  },
  {
    title: "Content & Social",
    desc: "Messaging, art direction and content systems that keep your brand consistent.",
  },
  {
    title: "UI/UX Design",
    desc: "Product design from flows to high‑fidelity interfaces and design systems.",
  },
];

function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
          What we do
        </h2>
        <p className="mt-3 text-blue-200/90 text-center max-w-2xl mx-auto">
          From the first sketch to a full launch, we partner closely to build brands that last.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-blue-200/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
