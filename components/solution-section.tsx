'use client'

import { useEffect, useRef } from 'react'
import { Shield, Brain, Search, BarChart3, MessageSquare, Globe, Lightbulb, CheckCircle2 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Semantic Analysis',
    desc: 'Deep NLP models parse email intent, tone, and linguistic patterns to detect manipulation tactics invisible to rule-based systems.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  {
    icon: Search,
    title: 'Contextual Validation',
    desc: 'Cross-references email content against sender history, domain reputation, and real-world communication context.',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
  {
    icon: BarChart3,
    title: 'Phishing Risk Scoring',
    desc: 'Provides a 0–100 confidence score with confidence intervals, helping users make informed decisions at a glance.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    icon: MessageSquare,
    title: 'Explainable AI Alerts',
    desc: 'Every detection comes with a plain-language explanation — not just a label, but a reason you can understand.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
  {
    icon: Globe,
    title: 'Sender & Domain Verification',
    desc: 'Checks DKIM, SPF, DMARC records and detects homoglyph domains, typosquatting, and lookalike URLs.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
  },
  {
    icon: Lightbulb,
    title: 'Intelligent Recommendations',
    desc: 'Instead of blocking, Sentinel guides users with actionable, context-aware recommendations before they interact.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
  },
]

function LayerDiagram() {
  return (
    <div className="glass-card rounded-2xl p-5 space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">Architecture Overview</span>
      </div>

      {/* Layers */}
      {[
        {
          label: 'Your Gmail / Email Client',
          sublabel: 'Unchanged — Sentinel runs alongside',
          color: 'border-border/60 bg-secondary/30',
          text: 'text-muted-foreground',
          icon: '📧',
        },
        {
          label: 'Sentinel AI Assistance Layer',
          sublabel: 'NLP · ML · LLM · Contextual AI',
          color: 'border-primary/50 bg-primary/10',
          text: 'text-primary',
          icon: '🛡',
        },
        {
          label: 'Risk Score + Explanation',
          sublabel: 'Explainable, user-friendly output',
          color: 'border-accent/50 bg-accent/10',
          text: 'text-accent',
          icon: '📊',
        },
        {
          label: 'User Decision & Action',
          sublabel: 'Empowered, not replaced',
          color: 'border-green-500/50 bg-green-500/10',
          text: 'text-green-400',
          icon: '✅',
        },
      ].map((layer, i) => (
        <div key={layer.label} className="relative">
          <div className={`border ${layer.color} rounded-xl px-4 py-3 flex items-center gap-3`}>
            <span className="text-lg">{layer.icon}</span>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${layer.text}`}>{layer.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{layer.sublabel}</p>
            </div>
            <CheckCircle2 className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
          </div>
          {i < 3 && (
            <div className="flex justify-center my-1">
              <div className="w-0.5 h-4 bg-gradient-to-b from-border to-transparent" />
            </div>
          )}
        </div>
      ))}

      {/* Key benefit */}
      <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-xs text-primary font-mono text-center">
          Sentinel never replaces Gmail — it adds an intelligent analysis layer
        </p>
      </div>
    </div>
  )
}

export function SolutionSection() {
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
      id="solution"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="solution-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 orb bg-primary/8" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
            <Shield className="w-3 h-3" />
            The Solution
          </div>
          <h2
            id="solution-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            An Intelligent{' '}
            <span className="neon-text">Assistance Layer</span>{' '}
            for Your Inbox
          </h2>
          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sentinel AI doesn&apos;t replace your email client. It sits alongside it — analyzing,
            scoring, and explaining every suspicious email before you interact.
          </p>
        </div>

        {/* Layout: feature cards + diagram */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Feature cards — 3 col */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="reveal glass-card rounded-2xl p-5 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group cursor-default"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className={`w-10 h-10 rounded-xl ${feat.bg} border ${feat.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <feat.icon className={`w-5 h-5 ${feat.color}`} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{feat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Layer diagram — 2 col */}
          <div className="lg:col-span-2 reveal" style={{ transitionDelay: '0.3s' }}>
            <LayerDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
