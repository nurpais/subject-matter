'use client'

import Button from '@/components/ui/Button'
import clsx from 'clsx'
import Link from 'next/link'
import { useContext } from 'react'
import Footer from '../Footer'
import Container from '../Container'
import { NavbarContext } from '@/context/NavbarContext'
import NavbarTriggerBtn from './NavbarTriggerBtn'

const Navbar = () => {
  const navbarContext = useContext(NavbarContext)

  if (!navbarContext) return null

  const { isOpen, setIsOpen } = navbarContext

  return (
    <>
      <div className="fixed right-2 top-[160px] z-50 hidden sm:top-[200px] md:right-2.5  md:top-5 md:block">
        <NavbarTriggerBtn />
      </div>

      <nav
        className={clsx(
          'fixed inset-0 z-50 flex flex-col overflow-auto bg-dark transition-all',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <Container className="relative flex-auto">
          <div className="right-0 top-0 flex w-full justify-between gap-5 px-2.5 py-5 md:fixed md:justify-end">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Button variant="outline">Home</Button>
            </Link>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>

          <ul className="mt-5 space-y-5 text-white">
            <li>
              <Link
                href="/about"
                className="font-tobias text-[70px] leading-[0.8em] md:text-[140px] lg:text-[200px]"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="font-tobias text-[70px] leading-[0.8em] md:text-[140px] lg:text-[200px]"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-tobias text-[70px] leading-[0.8em] md:text-[140px] lg:text-[200px]"
                onClick={() => setIsOpen(false)}
              >
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
