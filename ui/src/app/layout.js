'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { MetaMaskProvider } from '@/contexts/MetaMask'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MetaMaskProvider>
      <body className={inter.className}>{children}</body>
      </MetaMaskProvider>
    </html>
  )
}
