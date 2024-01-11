'use client'

import { CommonProps } from '@/@types/common'
import clsx from 'clsx'
import React, { ComponentPropsWithRef, MouseEvent, forwardRef } from 'react'

interface ButtonProps extends CommonProps, ComponentPropsWithRef<'button'> {
  variant?: 'solid' | 'outline'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, variant = 'solid', ...rest } = props

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { onClick } = props

    onClick?.(e)
  }

  const classes = clsx(
    'button',
    className,
    variant === 'solid' ? 'button-solid' : '',
    variant === 'outline' ? 'button-outline' : '',
  )

  return (
    <button ref={ref} {...rest} className={classes} onClick={handleClick}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
