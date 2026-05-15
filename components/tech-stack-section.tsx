'use client'

import { useEffect, useRef } from 'react'
import { Layers, Cpu, Brain, Network, Search, Lightbulb, Code } from 'lucide-react'

const technologies = [
  {
    icon: Brain,
    name: 'NLP',
    fullName: 'Natural Language Processing',
    desc: 'Transformer architectures analyze email semantics, extract entities, detect sentiment, and identify manipulation patterns in natural language.',
    tags: ['BERT', 'Transformers', 'Tokenization', 'Embeddings'],
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    size: 'md:col-span-2',
  },
  {
    icon: Cpu,
    name: 'ML',
    fullName: 'Machine Learning',
    desc: 'Ensemble classifiers trained on millions of labeled phishing samples provide robust, high-accuracy threat classification.',
    tags: ['Random Forest', 'XGBoost', 'SVM'],
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    size: '',
  },
  {
    icon: Network,
    name: 'LLM',
    fullName: 'Large Language Models',
    desc: 'Foundation models generate coherent, contextual explanations for every detection — making AI decisions transparent and understandable.',
    tags: ['GPT-4o', 'Llama 3', 'RAG'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    size: '',
  },
  {
    icon: Search,
    name: 'Semantic Embeddings',
    fullName: 'Vector Embeddings',
    desc: 'Email content is encoded into high-dimensional semantic vectors, enabling similarity searches against known phishing templates.',
    tags: ['Vector DB', 'Cosine Similarity', 'FAISS'],
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    size: '',
  },
  {
    icon: Layers,
    name: 'Contextual Analysis',
    fullName: 'Multi-Layer Context Engine',
    desc: 'Combines sender history, domain age, link analysis, and email thread context for a holistic threat assessment beyond raw text.',
    tags: ['DNS Lookup', 'WHOIS', 'Link Graph'],
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    size: '',
  },
  {
    icon: Lightbulb,
    name: 'Explainable AI',
    fullName: 'XAI — Interpretability Layer',
    desc: 'SHAP values and attention visualization surface the most influential signals behind each risk score, ensuring transparency and trust.',
    tags: ['SHAP', 'LIME', 'Attention Maps'],
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    size: 'md:col-span-2',
  },
]

export function TechStackSection() {
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
      id="technology"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="tech-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 orb bg-accent/6" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-accent/30 text-xs text-accent font-mono">
            <Code className="w-3 h-3" />
            Technology
          </div>
          <h2
            id="tech-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Built on{' '}
            <span className="neon-text">Cutting-Edge AI</span>
          </h2>
          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Sentinel AI combines six AI disciplines into a unified threat detection pipeline —
            each layer reinforcing the others.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className={`reveal glass-card rounded-2xl p-6 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group cursor-default ${tech.size}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${tech.bg} border ${tech.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <tech.icon className={`w-6 h-6 ${tech.color}`} />
                </div>
                <div className="text-right">
                  <span className={`text-2xl font-black font-mono ${tech.color} opacity-20`}>{tech.name}</span>
                </div>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-1">{tech.fullName}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tech.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {tech.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-0.5 rounded-md ${tech.bg} border ${tech.border} ${tech.color} font-mono`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
