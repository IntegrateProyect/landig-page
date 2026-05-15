'use client'

import { useEffect, useRef } from 'react'
import {
  Type, GitBranch, Lightbulb, Compass, Globe, BarChart2,
  Smartphone, BookOpen, Zap
} from 'lucide-react'

const features = [
  {
    icon: Type,
    title: 'NLP Semantic Analysis',
    desc: 'Transformer-based models decode manipulation tactics, urgency injection, and social engineering patterns embedded in email text.',
    tag: 'Core',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    size: 'md:col-span-2',
  },
  {
    icon: GitBranch,
    title: 'Machine Learning Classification',
    desc: 'Ensemble ML models trained on millions of phishing samples classify emails across dozens of attack vectors with high precision.',
    tag: 'Core',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    size: '',
  },
  {
    icon: Lightbulb,
    title: 'Explainable AI Alerts',
    desc: 'Every threat detection includes a clear, human-readable explanation — not just a risk label, but the exact reasoning behind it.',
    tag: 'Unique',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    size: '',
  },
  {
    icon: Compass,
    title: 'Context-Aware Recommendations',
    desc: 'Actionable guidance tailored to the specific threat type, helping users respond appropriately without needing security expertise.',
    tag: 'UX',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    size: '',
  },
  {
    icon: Globe,
    title: 'Sender & Domain Validation',
    desc: 'Automated DKIM, SPF, and DMARC checks plus homoglyph and lookalike domain detection to expose spoofed identities.',
    tag: 'Security',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    size: '',
  },
  {
    icon: BarChart2,
    title: 'Risk Confidence Percentage',
    desc: 'Beyond a binary safe/unsafe label, Sentinel provides a nuanced 0–100 risk score with confidence intervals for every analysis.',
    tag: 'Analytics',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    size: 'md:col-span-2',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Assistant',
    desc: 'Designed for on-the-go protection. Lightweight, fast, and fully optimized for iOS and Android with a native feel.',
    tag: 'Platform',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    size: '',
  },
  {
    icon: BookOpen,
    title: 'Educational Explanations',
    desc: 'Users learn why an email is dangerous, building long-term phishing awareness rather than passive dependence on the tool.',
    tag: 'Education',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    size: '',
  },
]

export function FeaturesSection() {
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
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-72 h-72 orb bg-accent/6" />
      <div className="absolute bottom-0 left-0 w-72 h-72 orb bg-primary/6" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
            <Zap className="w-3 h-3" />
            Feature Set
          </div>
          <h2
            id="features-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Everything You Need to{' '}
            <span className="neon-text">Stay Protected</span>
          </h2>
          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A complete AI-powered toolkit that detects, explains, and educates — built for
            real humans navigating a dangerous digital world.
          </p>
        </div>

        {/* Bento-style feature grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`reveal glass-card rounded-2xl p-6 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group cursor-default ${feat.size}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl ${feat.bg} border ${feat.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feat.icon className={`w-5 h-5 ${feat.color}`} />
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${feat.bg} border ${feat.border} ${feat.color} font-mono`}>
                  {feat.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>

              {/* Hover indicator */}
              <div className={`mt-4 h-0.5 w-0 group-hover:w-full ${feat.bg.replace('bg-', 'bg-').replace('/10', '')} transition-all duration-500 rounded-full opacity-60`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
