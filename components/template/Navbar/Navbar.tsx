'use client'

import { CommonProps } from '@/@types/common'
import Button from '@/components/ui/Button'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '../Footer'
import Container from '../Container'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="fixed  right-2.5 top-[160px] sm:top-[200px] md:right-5 md:top-5">
        <Button onClick={() => setIsOpen(true)}>Menu</Button>
      </div>

      <nav
        className={clsx(
          'fixed  inset-0 flex flex-col bg-dark transition-all',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <Container className="relative flex-auto">
          <div className="right-0 top-0 flex w-full justify-between gap-5 p-5 md:absolute md:justify-end">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Button variant="outline">Home</Button>
            </Link>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>

          <ul className="mt-5 space-y-5 text-white">
            <li>
              <Link href="/about" className="font-tobias text-[70px] leading-[0.8em] md:text-[140px] lg:text-[200px]">
                About
              </Link>
            </li>
            <li>
              <Link href="/work" className="font-tobias text-[70px] leading-[0.8em] md:text-[140px] lg:text-[200px]">
                Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-tobias text-[70px] leading-[0.8em] md:text-[140px] lg:text-[200px]">
                Contact
              </Link>
            </li>
          </ul>
        </Container>

        <Footer variant="dark" />
      </nav>
    </>
  )
}

export default Navbar
