'use client'

import { useEffect, useRef } from 'react'
import { Shield, AlertTriangle, CheckCircle, ChevronRight, ArrowRight, Lock, Zap } from 'lucide-react'

function RiskScoreCard() {
  return (
    <div className="glass-card rounded-2xl p-4 w-64 animate-float" style={{ animationDelay: '0s' }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Risk Analysis</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">HIGH RISK</span>
      </div>
      {/* Circular score */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-14 h-14 flex-shrink-0">
          <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="22" fill="none" stroke="oklch(0.2 0.02 240)" strokeWidth="4" />
            <circle
              cx="28" cy="28" r="22" fill="none"
              stroke="oklch(0.55 0.22 25)"
              strokeWidth="4"
              strokeDasharray={`${2 * Math.PI * 22 * 0.87} ${2 * Math.PI * 22}`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-red-400">87%</span>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Phishing Score</p>
          <p className="text-sm font-semibold text-foreground">Very High</p>
          <p className="text-xs text-muted-foreground mt-0.5">Confidence: 94%</p>
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { label: 'Sender Spoofing', value: 95, color: 'bg-red-500' },
          { label: 'Urgency Patterns', value: 82, color: 'bg-orange-500' },
          { label: 'Link Anomalies', value: 78, color: 'bg-yellow-500' },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs mb-0.5">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="text-foreground">{item.value}%</span>
            </div>
            <div className="h-1 rounded-full bg-secondary overflow-hidden">
              <div
                className={`h-full rounded-full ${item.color}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmailPreviewCard() {
  return (
    <div className="glass-card rounded-2xl p-4 w-72 animate-float" style={{ animationDelay: '1.5s' }}>
      <div className="flex items-start gap-2.5 mb-3">
        <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-4 h-4 text-red-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium text-foreground truncate">security@paypa1.com</p>
            <span className="text-xs text-red-400 flex-shrink-0">Suspicious</span>
          </div>
          <p className="text-xs text-muted-foreground">Urgent: Verify your account now</p>
        </div>
      </div>
      <div className="bg-secondary/50 rounded-lg p-2.5 mb-3">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Your account has been <span className="text-red-400 font-medium">temporarily suspended</span>. Click the link below to verify your identity immediately to avoid permanent closure...
        </p>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-red-500/10 border border-red-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          <span className="text-xs text-red-400">Domain mismatch detected</span>
        </div>
        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-red-500/10 border border-red-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-xs text-orange-400">High-urgency language pattern</span>
        </div>
        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
          <CheckCircle className="w-3 h-3 text-green-400" />
          <span className="text-xs text-green-400">AI explanation ready</span>
        </div>
      </div>
    </div>
  )
}

function SentinelDashboardMock() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden w-full max-w-lg">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-secondary/80 text-xs text-muted-foreground font-mono">
            <Lock className="w-3 h-3" />
            sentinel.ai / analyze
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4 space-y-3">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Threat Intelligence</span>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 font-mono">
            LIVE
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Scanned', value: '1,247', color: 'text-primary' },
            { label: 'Threats', value: '38', color: 'text-red-400' },
            { label: 'Safe', value: '1,209', color: 'text-green-400' },
          ].map((s) => (
            <div key={s.label} className="bg-secondary/50 rounded-lg p-2 text-center">
              <p className={`text-base font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Scan animation */}
        <div className="relative bg-secondary/30 rounded-xl overflow-hidden h-24">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 animate-scan"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-6">
            {['NLP', 'ML', 'LLM', 'XAI'].map((tag, i) => (
              <div
                key={tag}
                className="flex flex-col items-center gap-1"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center neon-border animate-pulse-glow">
                  <Zap className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent threats */}
        <div className="space-y-1.5">
          {[
            { sender: 'noreply@app1e.com', risk: 92, label: 'Spoofed domain' },
            { sender: 'admin@paypa1.net', risk: 88, label: 'Credential harvesting' },
            { sender: 'support@goog1e.co', risk: 74, label: 'Homoglyph attack' },
          ].map((t) => (
            <div key={t.sender} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary/40 hover:bg-secondary/60 transition-colors cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
              <span className="text-xs text-muted-foreground font-mono flex-1 truncate">{t.sender}</span>
              <span className="text-xs text-red-400 font-medium">{t.risk}%</span>
              <span className="text-xs text-muted-foreground hidden sm:block">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
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
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 orb bg-primary/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-3/4 right-1/4 w-64 h-64 orb bg-accent/10 translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              AI-Powered Cybersecurity Platform
            </div>

            {/* Headline */}
            <div className="reveal space-y-3">
<h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight"
                >
                  Protege tu bandeja de entrada con IA
                </h1>
            </div>

            {/* Subheadline */}
<p className="reveal text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Una app móvil que analiza correos sospechosos y te muestra por qué son peligrosos
                </p>

            {/* CTAs */}
            <div className="reveal flex flex-wrap gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground neon-glow-btn transition-all duration-300 hover:scale-105"
              >
                Try Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass border border-border/60 text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Micro-stats */}
            <div className="reveal flex flex-wrap gap-6 pt-2">
              {[
                { value: '97%', label: 'Detection Accuracy' },
                { value: '<200ms', label: 'Analysis Time' },
                { value: '10M+', label: 'Emails Analyzed' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — visual */}
          <div className="relative flex items-center justify-center">
            {/* Dashboard mock */}
            <div className="reveal w-full">
              <SentinelDashboardMock />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 md:-left-12 top-8 reveal" style={{ transitionDelay: '0.2s' }}>
              <RiskScoreCard />
            </div>

            <div className="absolute -right-4 md:-right-8 bottom-8 reveal" style={{ transitionDelay: '0.4s' }}>
              <EmailPreviewCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
