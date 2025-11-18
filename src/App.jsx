import React from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
            <span className="font-bold tracking-tight">Blue Brand Studio</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200/90">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/test" className="hover:text-white transition-colors">System Check</a>
          </nav>
          <a href="#contact" className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-sm font-semibold transition-colors">
            Start a project
          </a>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Services */}
      <Services />

      {/* Simple showcase placeholder */}
      <section id="work" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-extrabold">Over 3,048 projects shipped</h3>
                <p className="mt-2 text-blue-200/85 max-w-2xl">
                  We partner with startups, SMEs, and NGOs across the Philippines—from Manila to Cebu—to craft distinctive brands and high‑performing websites. Here’s a small sample of the breadth and polish you can expect.
                </p>
              </div>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 font-semibold">See case studies</a>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-white/10 flex items-center justify-center text-blue-200/70 text-sm">
                  Project preview {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Blue Brand Studio • Philippines</p>
          <p className="text-blue-200/70 text-sm">24+ active clients • 3,048+ projects</p>
        </div>
      </footer>
    </div>
  )
}

export default App
