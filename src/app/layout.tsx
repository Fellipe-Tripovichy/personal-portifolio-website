"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyClasses = ["inter", "bg-beige"].join(" ");
  return (
    <html lang="pt-BR">
      <body className={'bodyClasses'}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <NavBar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}