import Image from 'next/image'
import React from 'react'
import NavbarTriggerBtn from '../Navbar/NavbarTriggerBtn'

const Hero = () => {
  return (
    <>
      <p className="block pt-2.5 text-[25vw] font-normal leading-none md:pt-5 md:text-[160px] lg:text-[248px]">
        Subject
      </p>
      <div className="sticky top-5 z-40 mt-14 flex justify-end md:hidden">
        <NavbarTriggerBtn />
      </div>

      <Image
        width="282"
        height="260"
        alt=""
        src="/gif/hand.gif"
        className="mt-[103px] md:mt-[70px] lg:w-[350px]"
        aria-hidden="true"
      />

      <p className="block pb-2.5 text-right font-tobias text-[33vw] font-light leading-none md:pb-5 md:text-[160px]  lg:text-[326px]">
        Matter
      </p>
    </>
  )
}

export default Hero
