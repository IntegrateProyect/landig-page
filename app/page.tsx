import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ProblemSection } from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { FeaturesSection } from '@/components/features-section'
import { MobileShowcaseSection } from '@/components/mobile-showcase-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { TargetUsersSection } from '@/components/target-users-section'
import { FutureCTAFooter } from '@/components/future-cta-footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MobileShowcaseSection />
      <TechStackSection />
      <TargetUsersSection />
      <FutureCTAFooter />
    </main>
  )
}
