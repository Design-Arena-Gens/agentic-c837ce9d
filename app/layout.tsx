import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-c837ce9d.vercel.app'),
  title: {
    default: 'Tomasz W?adys?aw Barczyk ? CEO ?wiat?a',
    template: '%s | Light Global'
  },
  description: 'High-tech, strategic leadership. Synergia operacyjna i technologia, kt?ra wyprzedza jutro.',
  openGraph: {
    title: 'Tomasz W?adys?aw Barczyk ? CEO ?wiat?a',
    description: 'High-tech, strategic leadership. Synergia operacyjna i technologia, kt?ra wyprzedza jutro.',
    url: 'https://agentic-c837ce9d.vercel.app',
    siteName: 'Light Global',
    images: [
      { url: '/og.svg', width: 1200, height: 630, alt: 'Light Global ? High-tech Strategy' }
    ],
    locale: 'pl_PL',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tomasz W?adys?aw Barczyk ? CEO ?wiat?a',
    description: 'Synergia operacyjna i technologia nap?dzaj?ca przewag? konkurencyjn?.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen antialiased selection:bg-cyan-300/20 selection:text-white">
        <div className="fixed inset-0 -z-10 grid-overlay opacity-60" aria-hidden />
        <div className="fixed inset-0 -z-20 hero-gradient" aria-hidden />
        {children}
      </body>
    </html>
  )
}
