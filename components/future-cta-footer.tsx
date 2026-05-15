'use client'

import { useEffect, useRef } from 'react'
import { Telescope, LayoutDashboard, Users, RefreshCw, AlertOctagon, ArrowRight, Github, Shield, ExternalLink } from 'lucide-react'

const futureItems = [
  {
    icon: LayoutDashboard,
    title: 'Enterprise Dashboard',
    desc: 'A centralized web dashboard for organizations to monitor team-wide phishing exposure, review incidents, and track threat trends over time.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  {
    icon: Users,
    title: 'Team Monitoring',
    desc: 'Security managers gain visibility into which team members are targeted most frequently, enabling proactive protection and training.',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
  {
    icon: RefreshCw,
    title: 'Adaptive Learning',
    desc: 'Federated on-device learning lets Sentinel improve from real-world interactions across users without ever compromising individual privacy.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
  {
    icon: AlertOctagon,
    title: 'Advanced Anomaly Detection',
    desc: 'Next-generation models trained to detect zero-day phishing vectors, behavioral anomalies, and targeted spear-phishing campaigns.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
]

function FutureVisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="vision-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 orb bg-accent/6 translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-accent/30 text-xs text-accent font-mono">
            <Telescope className="w-3 h-3" />
            Roadmap & Vision
          </div>
          <h2
            id="vision-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            The Future of{' '}
            <span className="neon-text">AI-Driven Defense</span>
          </h2>
          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Sentinel AI is a living platform. As threats evolve, so do our defenses — here&apos;s
            what&apos;s coming next.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {futureItems.map((item, i) => (
            <div
              key={item.title}
              className="reveal glass-card rounded-2xl p-6 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group cursor-default"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`w-11 h-11 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[300px] orb bg-primary/10 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glow ring */}
        <div className="reveal mb-10">
          <div className="relative inline-flex items-center justify-center w-20 h-20">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-primary/5 border border-primary/30" />
            <Shield className="w-8 h-8 text-primary relative z-10" />
          </div>
        </div>

        <h2
          id="cta-heading"
          className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6"
        >
          Strengthen Human Decision-Making{' '}
          <span className="neon-text">Against AI-Driven Threats</span>
        </h2>

        <p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          The next generation of phishing attacks is already here — crafted by AI, personalized
          at scale. Sentinel AI gives every user the intelligence to fight back.
        </p>

        <div className="reveal flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold bg-primary text-primary-foreground neon-glow-btn transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold glass border border-border/60 text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </a>
        </div>

        {/* Trust indicators */}
        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { label: 'No credit card required' },
            { label: 'Academic research project' },
            { label: 'Privacy-first design' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <div className="w-1 h-1 rounded-full bg-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-12 overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Sentinel<span className="text-primary"> AI</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An AI-powered mobile assistant for phishing detection and contextual email verification.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-border/40 text-xs text-muted-foreground inline-flex w-fit">
              Academic Research Project — 2025
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Technologies</h3>
            <ul className="space-y-2" role="list">
              {['NLP & Transformers', 'Machine Learning', 'Large Language Models', 'Semantic Embeddings', 'Explainable AI (XAI)', 'React Native / Next.js'].map((tech) => (
                <li key={tech} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">{tech}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Project</h3>
            <ul className="space-y-2" role="list">
              {[
                { label: 'Documentation', href: '#' },
                { label: 'GitHub Repository', href: '#', icon: Github },
                { label: 'Research Paper', href: '#' },
                { label: 'Contact', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    {link.icon && <link.icon className="w-3.5 h-3.5" />}
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 Sentinel AI. Academic research project. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="font-mono">v1.0.0-alpha</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>System Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function FutureCTAFooter() {
  return (
    <>
      <FutureVisionSection />
      <CTASection />
      <Footer />
    </>
  )
}
