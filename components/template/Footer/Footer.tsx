import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import { CommonProps } from '@/@types/common'
import clsx from 'clsx'

interface FooterProps extends CommonProps {
  variant?: 'light' | 'dark'
}

const Footer = ({ variant = 'light' }: FooterProps) => {
  return (
    <footer className={clsx('font-medium', variant === 'light' ? 'text-dark' : 'text-white')}>
      <Container className="flex flex-col gap-1 py-5 md:flex-row md:justify-between">
        <p>
          Subject Matter <sup>&copy;</sup>
        </p>

        <Link href="https://www.instagram.com/_subjectmatter/" target="_blank">
          Instagram
        </Link>

        <Link href="mailto:hello@subjectmatter.co.nz">Contact</Link>
      </Container>
    </footer>
  )
}

export default Footer
