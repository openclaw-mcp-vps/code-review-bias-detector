import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Review Bias Detector',
  description: 'Detect bias in code review comments and foster a healthier engineering culture.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5efc76e6-bc2d-48b0-8b66-5c0294b46dd6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
