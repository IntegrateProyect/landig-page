'use client'

import { useEffect, useRef } from 'react'
import { AlertTriangle, Brain, TrendingUp, ShieldOff, Bot } from 'lucide-react'

const threats = [
  {
    icon: Bot,
    title: 'LLM-Generated Attacks',
    desc: 'Attackers now use large language models to craft perfectly worded, highly convincing phishing emails that bypass traditional keyword-based filters.',
    stat: '4.3×',
    statLabel: 'increase in AI-written attacks',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
  },
  {
    icon: Brain,
    title: 'Advanced Social Engineering',
    desc: 'AI enables attackers to personalize emails at scale, mimicking real contacts, companies, and communication styles to exploit human psychology.',
    stat: '91%',
    statLabel: 'of attacks use social engineering',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
  },
  {
    icon: TrendingUp,
    title: 'Exponential Growth',
    desc: 'Phishing incidents have grown by over 300% in three years, with AI-assisted campaigns targeting organizations across every industry.',
    stat: '300%',
    statLabel: 'growth over 3 years',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    icon: ShieldOff,
    title: 'Filters Are Not Enough',
    desc: 'Traditional spam and phishing filters rely on blacklists and basic pattern matching — completely unable to detect novel, contextually aware AI-crafted threats.',
    stat: '78%',
    statLabel: 'of AI-phishing bypasses filters',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
]

function FakeEmailCard() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
      {/* Email header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
        <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
        <span className="text-xs text-red-400 font-mono">THREAT DETECTED</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          <span className="text-xs text-muted-foreground">Live Sample</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">From:</span>
            <span className="text-xs font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">security@app1e-id.com</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Subject:</span>
            <span className="text-xs text-foreground">Your Apple ID has been locked</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Received:</span>
            <span className="text-xs text-muted-foreground">2 minutes ago</span>
          </div>
        </div>

        <div className="bg-secondary/40 rounded-xl p-3 text-sm text-muted-foreground leading-relaxed border border-border/30">
          <p>Dear Customer,</p>
          <p className="mt-1">
            We have detected{' '}
            <span className="text-orange-400 font-medium">unusual activity</span> on your Apple
            account. Your access has been{' '}
            <span className="text-red-400 font-medium">temporarily restricted</span>.
          </p>
          <p className="mt-1">
            Please verify your identity{' '}
            <span className="text-red-400 font-medium underline cursor-pointer">immediately</span>{' '}
            to restore full access. Failure to verify within{' '}
            <span className="text-orange-400 font-medium">24 hours</span> will result in
            permanent account suspension.
          </p>
        </div>

        {/* AI detection markers */}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">AI Detection Markers</p>
          {[
            { label: 'Homoglyph domain (app1e ≠ apple)', level: 'CRITICAL', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
            { label: 'Artificial urgency injection', level: 'HIGH', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
            { label: 'Coercive threat language', level: 'HIGH', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
            { label: 'Missing DKIM/SPF alignment', level: 'MEDIUM', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
          ].map((marker) => (
            <div
              key={marker.label}
              className={`flex items-center justify-between px-3 py-2 rounded-lg ${marker.bg} border ${marker.border}`}
            >
              <span className="text-xs text-foreground/80">{marker.label}</span>
              <span className={`text-xs font-mono font-bold ${marker.color}`}>{marker.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProblemSection() {
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
      id="problem"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="problem-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 orb bg-red-500/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-red-500/30 text-xs text-red-400 font-mono">
            <AlertTriangle className="w-3 h-3" />
            The Threat Landscape
          </div>
          <h2
            id="problem-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Phishing Has Evolved.{' '}
            <span className="text-red-400">Your Defenses Haven&apos;t.</span>
          </h2>
<p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Los correos de phishing creados con [ADDRESS] son [PERSON_NAME] y pueden pasar desapercibidos para los filtros tradicionales. Los usuarios no tienen una herramienta que explique por qué un mensaje es peligroso.
            </p>
        </div>

        {/* Main content: cards + fake email */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Threat cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {threats.map((threat, i) => (
              <div
                key={threat.title}
                className="reveal glass-card rounded-2xl p-5 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group cursor-default"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-10 h-10 rounded-xl ${threat.bg} border ${threat.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <threat.icon className={`w-5 h-5 ${threat.color}`} />
                </div>
                <div className="mb-2">
                  <span className={`text-2xl font-bold ${threat.color}`}>{threat.stat}</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">{threat.statLabel}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{threat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{threat.desc}</p>
              </div>
            ))}
          </div>

          {/* Fake email visualization */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <FakeEmailCard />
          </div>
        </div>
      </div>
    </section>
  )
}
