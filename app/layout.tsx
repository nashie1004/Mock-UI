import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LOPHILS INC - Mock UI',
  description: 'mock',
}

import Context from '@/context/Context'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Context>
          {children}
        </Context>
      </body>
    </html>
  )
}
