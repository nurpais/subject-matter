'use client'
import { CommonProps } from '@/@types/common'
import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface DarkBackgroundSection extends CommonProps {
  animate?: boolean
}

const DarkBackgroundSection = ({ children, animate = true }: DarkBackgroundSection) => {
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
            duration: animate ? 0.5 : 0,
          })
        },
        onLeaveBack: () => {
          document.body.classList.remove('bg-dark')
          gsap.to(document.body, {
            backgroundColor: '#fff',
            duration: animate ? 0.5 : 0,
          })
        },
      })
    })

    return () => ctx.revert()
  }, [animate])

  return <div ref={sectionRef}>{children}</div>
}

export default DarkBackgroundSection
