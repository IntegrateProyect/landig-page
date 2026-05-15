import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Sentinel AI — AI-Powered Phishing Detection',
  description:
    'An intelligent mobile assistant that analyzes suspicious emails using NLP, Machine Learning, and contextual AI to protect against phishing and social engineering threats.',
  keywords: ['phishing detection', 'AI security', 'email security', 'NLP', 'cybersecurity'],
  openGraph: {
    title: 'Sentinel AI — AI-Powered Phishing Detection',
    description:
      'Intelligent mobile assistant for email phishing detection using advanced NLP and Machine Learning.',
    type: 'website',
  },
  themeColor: '#0a0f1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
