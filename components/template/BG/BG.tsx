'use client'
import { CommonProps } from '@/@types/common'
import useBg from '@/hooks/useBg'

interface BGProps extends CommonProps {
  color: string
}

const BG = ({ children, color }: BGProps) => {
  useBg(color)
  return <div>{children}</div>
}

export default BG
