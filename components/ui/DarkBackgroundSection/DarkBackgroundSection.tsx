'use client'
import { CommonProps } from '@/@types/common'
import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DarkBackgroundSection = ({ children }: CommonProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        end: 'top center',

        onEnter: () => {
          document.body.classList.add('bg-dark')
          gsap.to(document.body, {
            backgroundColor: '#302F26',
            duration: 0.5,
          })
        },
        onLeaveBack: () => {
          document.body.classList.remove('bg-dark')
          gsap.to(document.body, {
            backgroundColor: '#fff',
            duration: 0.5,
          })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return <div ref={sectionRef}>{children}</div>
}

export default DarkBackgroundSection
