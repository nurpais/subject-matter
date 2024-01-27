import { CommonProps } from '@/@types/common'
import clsx from 'clsx'

interface ContainerProps extends CommonProps {
  fluid?: boolean
}

const Container = ({ children, className, fluid = false }: ContainerProps) => {
  return (
    <div className={clsx('mx-auto w-full max-w-[1920px]', !fluid ? 'px-2.5 md:px-5' : '', className)}>{children}</div>
  )
}

export default Container
