import Link from 'next/link'
import React from 'react'
import Container from '../Container'

const Footer = () => {
  return (
    <footer className="font-medium">
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
