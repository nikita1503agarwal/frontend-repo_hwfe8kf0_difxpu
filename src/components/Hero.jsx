import React from "react";
import Laptop3D from "./Laptop3D";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-10 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-xs">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          Brandstudio PH • Philippines
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          We design brands and sell websites that perform
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-blue-200/90 max-w-3xl mx-auto">
          A Philippine brand studio focused on branding and site design — over 3,048 projects shipped for 24+ clients nationwide.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
            Start a project
          </a>
          <a href="#services" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10 transition-colors">
            Explore services
          </a>
        </div>
      </div>

      {/* Interactive 3D laptop with site preview */}
      <Laptop3D />
    </section>
  );
}

export default Hero;
