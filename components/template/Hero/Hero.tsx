import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <header className="py-2.5 md:py-5">
      <h1>
        <span className="block text-[25vw] font-normal leading-none md:text-[160px] lg:text-[248px]">Subject</span>
        <Image
          width="282"
          height="260"
          alt=""
          src="/gif/hand.gif"
          className="mt-[198px] md:mt-[70px] lg:w-[350px]"
          aria-hidden="true"
        />
        <span className="font-tobias block text-right text-[33vw] font-light leading-none md:text-[160px] lg:text-[326px]">
          Matter
        </span>
      </h1>
    </header>
  )
}

export default Hero
