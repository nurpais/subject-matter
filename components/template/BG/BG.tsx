'use client'
import { CommonProps } from '@/@types/common'
import useBg from '@/hooks/useBg'

interface BGProps extends CommonProps {
  color: string
}

const BG: React.FC<BGProps> = ({ children, color }) => {
  useBg(color)
  return <div>{children}</div>
}

export default BG
