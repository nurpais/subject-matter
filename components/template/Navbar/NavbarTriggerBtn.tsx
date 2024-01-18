'use client'
import Button from '@/components/ui/Button'
import { NavbarContext } from '@/context/NavbarContext'
import { useContext } from 'react'

const NavbarTriggerBtn = () => {
  const navbarContext = useContext(NavbarContext)

  if (!navbarContext) return null

  const { setIsOpen } = navbarContext

  return <Button onClick={() => setIsOpen(true)}>Menu</Button>
}

export default NavbarTriggerBtn
