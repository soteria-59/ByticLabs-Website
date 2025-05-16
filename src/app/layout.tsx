import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { Inter, Montserrat } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'
import PathnameWrapper from '@/components/PathnameWrapper'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'ByticLabs',
  description: 'Innovate. Secure. Automate.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-inter bg-white text-gray-900">
        <PathnameWrapper />
        <NavBar />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  )
}
