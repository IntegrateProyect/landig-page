'use client'

import { useEffect, useRef } from 'react'
import { Mail, Cpu, BarChart3, Shield } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Mail,
    title: 'Email Received',
    desc: 'User receives a suspicious or unusual email. Sentinel AI is triggered automatically when the email is opened in the app.',
    detail: 'Zero friction — no manual action required',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/40',
    glowColor: 'shadow-primary/20',
  },
  {
    step: '02',
    icon: Cpu,
    title: 'AI Analyzes Email',
    desc: 'NLP and ML models parse the full email — semantics, tone, sender metadata, URLs, headers, and linguistic manipulation patterns.',
    detail: 'Multi-layer analysis in under 200ms',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/40',
    glowColor: 'shadow-accent/20',
  },
  {
    step: '03',
    icon: BarChart3,
    title: 'Risk Score Generated',
    desc: 'A phishing risk score (0–100) is computed with confidence intervals. The AI generates a plain-language explanation of every finding.',
    detail: '94%+ detection accuracy on novel threats',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/40',
    glowColor: 'shadow-yellow-500/20',
  },
  {
    step: '04',
    icon: Shield,
    title: 'User Gets Guidance',
    desc: 'Before the user clicks anything, Sentinel delivers actionable recommendations — report, ignore, verify sender — empowering better decisions.',
    detail: 'Educates while it protects',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/40',
    glowColor: 'shadow-green-500/20',
  },
]

function FlowVisualization() {
  return (
    <div className="glass-card rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Cpu className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">Analysis Pipeline</span>
        <span className="ml-auto text-xs text-muted-foreground font-mono">&lt;200ms</span>
      </div>
      <div className="space-y-2">
        {[
          { label: 'Email Ingestion', pct: 100, color: 'bg-primary', time: '0ms' },
          { label: 'Header & Domain Parse', pct: 90, color: 'bg-primary', time: '15ms' },
          { label: 'NLP Semantic Model', pct: 75, color: 'bg-accent', time: '65ms' },
          { label: 'ML Classification', pct: 60, color: 'bg-accent', time: '120ms' },
          { label: 'LLM Explanation Gen', pct: 40, color: 'bg-yellow-500', time: '170ms' },
          { label: 'Risk Score Output', pct: 20, color: 'bg-green-500', time: '195ms' },
        ].map((item, i) => (
          <div key={item.label} className="group">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
              <span className="text-muted-foreground font-mono">{item.time}</span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className={`h-full rounded-full ${item.color} opacity-70`}
                style={{ width: `${100 - item.pct + 20}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Total pipeline latency</span>
        <span className="text-sm font-bold text-green-400 font-mono">~195ms</span>
      </div>
    </div>
  )
}

export function HowItWorksSection() {
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
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="how-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] orb bg-primary/5 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-accent/30 text-xs text-accent font-mono">
            <Cpu className="w-3 h-3" />
            How It Works
          </div>
          <h2
            id="how-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Four Steps to{' '}
            <span className="neon-text">Threat Clarity</span>
          </h2>
          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From inbox to insight in milliseconds. Sentinel&apos;s pipeline runs transparently
            in the background, empowering every decision.
          </p>
        </div>

        {/* Steps timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="reveal relative group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0.75rem)] w-6 h-0.5 bg-gradient-to-r from-border to-transparent z-10" />
              )}

              <div className={`glass-card rounded-2xl p-5 h-full hover:border-border/60 transition-all duration-300 hover:-translate-y-1 shadow-xl ${step.glowColor}`}>
                {/* Step number */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <span className={`text-3xl font-black ${step.color} opacity-30 font-mono`}>{step.step}</span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{step.desc}</p>

                {/* Detail badge */}
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs ${step.bg} border ${step.border} ${step.color}`}>
                  <div className={`w-1 h-1 rounded-full bg-current`} />
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow visualization */}
        <div className="reveal max-w-xl mx-auto" style={{ transitionDelay: '0.4s' }}>
          <FlowVisualization />
        </div>
      </div>
    </section>
  )
}
