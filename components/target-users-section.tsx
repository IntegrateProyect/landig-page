'use client'

import { useEffect, useRef } from 'react'
import { GraduationCap, Briefcase, UserCog, User, Laptop, Users } from 'lucide-react'

const users = [
  {
    icon: GraduationCap,
    title: 'Students',
    subtitle: 'Academic & personal accounts',
    desc: 'Students regularly receive phishing emails targeting university credentials, financial aid, and subscription accounts. Sentinel helps them stay safe.',
    risks: ['Credential theft', 'Scholarship scams', 'Account takeover'],
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  {
    icon: Briefcase,
    title: 'Small Businesses',
    subtitle: 'SMBs & entrepreneurs',
    desc: 'Small businesses are prime targets for business email compromise (BEC) and invoice fraud. Sentinel provides enterprise-grade AI protection without the enterprise price.',
    risks: ['Invoice fraud', 'BEC attacks', 'Wire transfer scams'],
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
  {
    icon: UserCog,
    title: 'Administrative Staff',
    subtitle: 'Office & admin roles',
    desc: 'Administrative personnel handle sensitive data and financial transactions, making them high-value targets. Sentinel acts as an always-on AI security advisor.',
    risks: ['Data exfiltration', 'Impersonation', 'Finance fraud'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    icon: User,
    title: 'General Users',
    subtitle: 'Everyday email users',
    desc: 'No technical knowledge required. Sentinel&apos;s plain-language explanations make cybersecurity accessible to everyone, not just IT professionals.',
    risks: ['Password theft', 'Account phishing', 'Identity theft'],
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
  {
    icon: Laptop,
    title: 'Remote Workers',
    subtitle: 'Distributed teams',
    desc: 'Remote employees operate outside corporate firewalls and are frequently targeted via personal devices. Sentinel bridges the security gap.',
    risks: ['VPN phishing', 'Device compromise', 'Corporate data theft'],
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
  },
]

export function TargetUsersSection() {
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
      id="users"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="users-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-80 h-80 orb bg-primary/6" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs text-primary font-mono">
            <Users className="w-3 h-3" />
            Who We Protect
          </div>
          <h2
            id="users-heading"
            className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Built for{' '}
            <span className="neon-text">Every Human</span>{' '}
            in the Digital World
          </h2>
          <p className="reveal text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Phishing attacks don&apos;t discriminate by job title. Sentinel AI protects anyone
            who uses email — from students to executives.
          </p>
        </div>

        {/* User cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {users.map((user, i) => (
            <div
              key={user.title}
              className="reveal glass-card rounded-2xl p-6 hover:border-border/60 transition-all duration-300 hover:-translate-y-1 group cursor-default"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${user.bg} border ${user.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <user.icon className={`w-6 h-6 ${user.color}`} />
              </div>

              <h3 className="text-base font-semibold text-foreground mb-0.5">{user.title}</h3>
              <p className={`text-xs font-mono mb-3 ${user.color}`}>{user.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{user.desc}</p>

              <div className="space-y-1.5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Common Threats</p>
                {user.risks.map((risk) => (
                  <div key={risk} className={`flex items-center gap-2 text-xs ${user.color}`}>
                    <div className="w-1 h-1 rounded-full bg-current flex-shrink-0" />
                    {risk}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
