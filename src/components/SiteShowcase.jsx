import React from "react";

function SiteShowcase() {
  const items = [
    { title: "Fintech App", tag: "Product" },
    { title: "Cafe Rebrand", tag: "Identity" },
    { title: "SaaS Website", tag: "Web" },
    { title: "NGO Annual Report", tag: "Content" },
    { title: "Travel Booking UI", tag: "UI/UX" },
    { title: "E‑commerce Launch", tag: "Campaign" },
  ];

  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it, i) => (
        <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-700" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">{it.title}</div>
              <div className="text-xs text-blue-200/80">{it.tag}</div>
            </div>
            <div className="px-2 py-1 text-xs rounded bg-white/10 border border-white/10">View</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SiteShowcase;
