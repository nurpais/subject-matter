import type { Metadata } from 'next'
import '@/assets/styles/app.css'
import Footer from '@/components/template/Footer'
import Navbar from '@/components/template/Navbar'
import NavbarContextProvider from '@/context/NavbarContext'

export const metadata: Metadata = {
  title: 'Subject Matter | Web Development Specialists - Subject Matter',
  description:
    'A digital studio that specialises in creative strategy, design and development. We partner with forward-thinking brands, agencies, and designers to craft captivating and well-managed web experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavbarContextProvider>
          <Navbar />
          {children}
          <Footer />
        </NavbarContextProvider>
      </body>
    </html>
  )
}
