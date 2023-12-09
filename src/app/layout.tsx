import './globals.scss'
import type { Metadata } from 'next'

// Components
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'PV Interiors | Home',
  description: 'PV offers a wide range of services, from space planning and furniture selection',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
