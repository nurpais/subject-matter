import { CommonProps } from '@/@types/common'
import clsx from 'clsx'

interface ContainerProps extends CommonProps {}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx('mx-auto w-full max-w-[1920px] px-2.5 md:px-5', className)}>{children}</div>
}

export default Container
