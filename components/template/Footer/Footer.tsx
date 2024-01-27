'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Container from '../Container'
import { CommonProps } from '@/@types/common'
import clsx from 'clsx'

interface FooterProps extends CommonProps {
  variant?: 'light' | 'dark'
}

const Footer = ({ variant = 'light' }: FooterProps) => {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.body.classList.contains('bg-dark'))
        }
      })
    })

    observer.observe(document.body, { attributes: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <footer
      className={clsx(
        'font-medium',
        variant === 'light' ? 'text-dark' : 'text-white',
        isDark ? 'text-white' : 'text-dark',
      )}
    >
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
