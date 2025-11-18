import React from "react";

function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-transparent p-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">
            Ready to build a standout brand?
          </h3>
          <p className="mt-2 text-blue-200/90">
            Tell us about your goals and we’ll craft a proposal in 24 hours.
          </p>
          <a
            href="mailto:hello@brandstudio.ph?subject=Project%20Inquiry"
            className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
          >
            Get a proposal
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
