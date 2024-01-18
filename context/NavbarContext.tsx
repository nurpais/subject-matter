'use client'
import { CommonProps } from '@/@types/common'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface NavbarContextProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NavbarContext = createContext<NavbarContextProps | null>(null)

const NavbarContextProvider = ({ children }: CommonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <NavbarContext.Provider value={{ isOpen, setIsOpen }}>{children}</NavbarContext.Provider>
}

export default NavbarContextProvider
