import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Header } from '@/components/header'
import { HeroBanner } from '@/components/hero-banner'

const jakarta = Plus_Jakarta_Sans ({ subsets: ['latin'] })

export const metadata = {
  title: 'Leadster',
  description: 'Desafio Front-end',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Header/>
        <HeroBanner/>
        {children}
      </body>
    </html>
  )
}
