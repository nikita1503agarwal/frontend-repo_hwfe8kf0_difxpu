import React, { useRef, useState } from "react";

// Simple interactive 3D laptop mockup (CSS transforms) showcasing a mini site UI
function Laptop3D() {
  const wrapperRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: -12, ry: 0 });

  const handleMove = (e) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1 to 1
    const py = (y / rect.height) * 2 - 1; // -1 to 1
    const ry = px * 12; // rotateY
    const rx = -12 - py * 8; // base tilt + rotateX
    setTilt({ rx, ry });
  };

  const handleLeave = () => setTilt({ rx: -12, ry: 0 });

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group mx-auto mt-10 w-full max-w-4xl [perspective:1200px]"
    >
      <div
        className="relative mx-auto w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
          transition: "transform 180ms cubic-bezier(.2,.8,.2,1)",
        }}
      >
        {/* Screen bezel */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-slate-900/10 to-black/30" />

        {/* Camera dot */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-slate-600 shadow-[0_0_0_2px_rgba(0,0,0,0.4)]" />

        {/* Site UI inside screen */}
        <div className="relative z-10 h-full w-full p-3 sm:p-5">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 h-7 px-3 rounded-t-md bg-slate-800/90 border border-slate-700/60">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <div className="ml-3 flex-1 h-4 rounded bg-slate-700/70" />
          </div>

          {/* Website preview area */}
          <div className="mt-3 h-[calc(100%-1.75rem-0.75rem)] rounded-b-md bg-slate-900/60 border border-slate-700/60 overflow-hidden">
            {/* Hero section */}
            <div className="h-1/3 sm:h-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs sm:text-sm uppercase tracking-widest text-blue-200/80">Brand Studio • PH</div>
                  <div className="mt-2 text-lg sm:text-2xl font-extrabold">We build brands that win</div>
                  <div className="mt-2 inline-flex gap-2">
                    <span className="px-2 py-1 text-[10px] sm:text-xs rounded bg-blue-500 text-white">Start</span>
                    <span className="px-2 py-1 text-[10px] sm:text-xs rounded bg-white/10 text-white border border-white/10">Services</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid preview */}
            <div className="grid grid-cols-3 gap-2 p-2 sm:p-3 bg-slate-900/40">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded bg-gradient-to-br from-slate-800 to-slate-700 border border-white/10"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Base/keyboard */}
      <div
        className="relative mx-auto mt-3 w-[92%] h-3 rounded-b-xl bg-slate-800 border border-white/10"
        style={{
          transform: `rotateX(${tilt.rx / 3}deg) rotateY(${tilt.ry / 3}deg)`,
          transition: "transform 180ms cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <div className="absolute inset-x-8 top-0 h-1.5 rounded-b bg-slate-700/70" />
      </div>
    </div>
  );
}

export default Laptop3D;
