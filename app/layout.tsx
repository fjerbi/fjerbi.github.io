import type { Metadata } from 'next'
import { Libre_Franklin } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

// Import Libre Franklin font
const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Firas Jerbi - Frontend Developer',
  description: `I'm a software engineer | Front-End developer based in Germany. I'm passionate about developing web and mobile applications. I love to learn new technologies and explore new front-end frameworks. I'm also a big fan of open-source projects and contributing to them. If you're interested in my work, check out my portfolio.`,
  keywords:
    'Front-End Developer, Firas Jerbi, Software Engineer, Web Developer, Mobile App Developer, React Developer, JavaScript Developer, Front-End Technologies, Front-End Frameworks, Open-Source Contributor, Web Application Developer, Mobile Application Developer, Web Development Portfolio, Full Stack Developer, Developer Portfolio, Software Engineer in Germany, React.js Developer, Web and Mobile Development, Front-End Frameworks Expert, Modern Web Development, Open-Source Projects, Learn New Technologies',
  openGraph: {
    type: 'website',
    url: 'https://fjerbi.github.io/',
    title: 'Firas Jerbi - Frontend Developer',
    description: `I'm a software engineer | Front-End developer based in Germany. I'm passionate about developing web and mobile applications. I love to learn new technologies and explore new front-end frameworks. I'm also a big fan of open-source projects and contributing to them. If you're interested in my work, check out my portfolio.`,
   
  }}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          libreFranklin.variable // Apply the Libre Franklin font variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
