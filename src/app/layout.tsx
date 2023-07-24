import './globals.scss'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

const space_grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Verlith',
  description: 'Verlith Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>{children}</body>
    </html>
  )
}
